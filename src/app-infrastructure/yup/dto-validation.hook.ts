import { useEffect, useState, useCallback, useRef } from 'react';
import { ValidationError, ObjectSchema } from 'yup';
import {
  TValidationState,
  TValidField,
  type TGetInitialValidationDto,
  type TInitialValidationDto
} from './types';
import deepEqual from '../app-helpers/deep-equal';
import { initialValidate } from '../app-types/t-validate';
import type TUnknownRecord from '../app-types/t-unknown-record';
import type { TFormDtoKey } from '../../redux-toolkit/form-dto-serialization/form-dto-serialization-actions';
import formDtoSerialization from '../../app-infrastructure/app-helpers/form-dto-serialization/';

type TUseDtoValidationOptions<
  TValidationDto extends TUnknownRecord,
  TDto extends TUnknownRecord | FormData | null,
  TSchema extends TUnknownRecord,
  TSerializationDto extends TUnknownRecord
> = {
  getInitialValidationDto: TGetInitialValidationDto<TValidationDto>;
  initDtoValid: () => TValidField<TValidationDto>;
  getSchema: () => ObjectSchema<TSchema>;
  onValidDtoReady: (dto: TDto | null) => void;
  transformToDto: (validationDto: TValidationDto) => TDto;
  formDtoKey: TFormDtoKey;
  transformValidationDtoToSerializationDto?: (
    validationDto: TValidationDto
  ) => TSerializationDto;
};

const useDtoValidation = <
  TValidationDto extends TUnknownRecord,
  TDto extends TUnknownRecord | FormData | null,
  TSchema extends TUnknownRecord,
  TSerializationDto extends TUnknownRecord
>(
  options: TUseDtoValidationOptions<
    TValidationDto,
    TDto,
    TSchema,
    TSerializationDto
  >
): TValidationState<TValidationDto> => {
  const {
    getInitialValidationDto,
    initDtoValid,
    getSchema,
    onValidDtoReady,
    transformToDto,
    formDtoKey,
    transformValidationDtoToSerializationDto = (
      validationDto: TValidationDto
    ) => {
      return validationDto as unknown as TSerializationDto;
    }
  } = options;

  const initialValidationDto = useRef<TInitialValidationDto<TValidationDto>>(
    getInitialValidationDto({ isSerialization: true })
  );

  const [validationDto, setValidationDto] = useState<TValidationDto>(
    initialValidationDto.current.validationDto
  );
  const [dtoValid, setDtoValid] =
    useState<TValidField<TValidationDto>>(initDtoValid());
  const [isModified, setIsModified] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleValueChange = useCallback(
    (fieldName: string, value: unknown) => {
      const schema = getSchema();
      const newValidationDto = { ...validationDto, [fieldName]: value };
      setValidationDto(newValidationDto);

      schema
        .validate(newValidationDto, { abortEarly: false })
        .then(() => {
          setDtoValid(initDtoValid());
        })
        .catch((err: unknown) => {
          if (!(err instanceof ValidationError)) {
            // Unresolved error
            // eslint-disable-next-line no-console
            setDtoValid(initDtoValid());
            return;
          }

          const inner = Array.isArray(err.inner) ? err.inner : [];

          const errors = inner.reduce(
            (acc, curVal) => {
              const tempValidate: Partial<TValidField<TValidationDto>> = {};
              if (curVal && curVal.path) {
                Object.assign(tempValidate, {
                  [`${curVal.path}`]: {
                    valid: false,
                    errorMsg: curVal.message
                  }
                });
              }
              return { ...acc, ...tempValidate };
            },
            {} as Partial<TValidField<TValidationDto>>
          );

          const base: TValidField<TValidationDto> =
            {} as TValidField<TValidationDto>;
          Object.keys(validationDto).forEach((key) => {
            base[key as keyof TValidationDto] =
              (errors as Partial<TValidField<TValidationDto>>)[
                key as keyof TValidationDto
              ] || initialValidate;
          });

          setDtoValid(base);
        });
    },
    [validationDto, getSchema, initDtoValid]
  );

  useEffect(() => {
    const schema = getSchema();
    schema.isValid(validationDto).then((valid) => {
      const modified = !deepEqual(
        validationDto,
        getInitialValidationDto({ isSerialization: false }).validationDto
      );
      setIsValid(valid);
      setIsModified(modified);

      if (valid && modified) {
        onValidDtoReady(transformToDto(validationDto));
      } else {
        onValidDtoReady(null);
      }
    });
  }, [
    getInitialValidationDto,
    getSchema,
    onValidDtoReady,
    transformToDto,
    validationDto
  ]);

  useEffect(() => {
    const newSerializationDto =
      transformValidationDtoToSerializationDto(validationDto);
    formDtoSerialization.Set(formDtoKey, newSerializationDto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationDto]);

  useEffect(() => {
    if (
      initialValidationDto.current &&
      initialValidationDto.current.isSerialization &&
      initialValidationDto.current.validationDto
    ) {
      Object.entries(initialValidationDto.current.validationDto).forEach(
        ([fieldName, value]) => {
          handleValueChange(fieldName, value);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = useCallback(() => {
    setValidationDto(
      getInitialValidationDto({ isSerialization: false }).validationDto
    );
    setDtoValid(initDtoValid());
    setIsValid(false);
    setIsModified(false);
  }, [getInitialValidationDto, initDtoValid]);

  return {
    dto: validationDto,
    dtoValid,
    handleValueChange,
    isModified,
    isValid,
    reset
  };
};

export default useDtoValidation;
