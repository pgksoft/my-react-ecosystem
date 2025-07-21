import { useEffect, useState, useCallback } from 'react';
import { ValidationError, ObjectSchema } from 'yup';
import { TValidationState, TValidField } from './types';
import deepEqual from '../helpers/deep-equal';
import { initialValidate } from '../types/t-validate';

function useDtoValidation<TDto extends object, TSchema extends object>({
  initialDto,
  initDtoValid,
  getSchema,
  onValidDtoReady
}: {
  initialDto: () => TDto;
  initDtoValid: () => TValidField<TDto>;
  getSchema: () => ObjectSchema<TSchema>;
  onValidDtoReady?: (dto: string | null) => void;
}): TValidationState<TDto> {
  const [dto, setDto] = useState<TDto>(initialDto());
  const [dtoValid, setDtoValid] = useState<TValidField<TDto>>(initDtoValid());
  const [isModified, setIsModified] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleValueChange = useCallback(
    (fieldName: string, value: unknown) => {
      const schema = getSchema();
      const newDto = { ...dto, [fieldName]: value };
      setDto(newDto);
      schema
        .validate(newDto, { abortEarly: false })
        .then(() => {
          setDtoValid(initDtoValid());
        })
        .catch((err: ValidationError) => {
          const errors = err.inner.reduce(
            (acc, curVal) => {
              const tempValidate: Partial<TValidField<TDto>> = {};
              if (curVal.path) {
                Object.assign(tempValidate, {
                  [`${curVal.path}`]: { valid: false, errorMsg: curVal.message }
                });
              }
              return { ...acc, ...tempValidate };
            },
            {} as Partial<TValidField<TDto>>
          );

          const base: TValidField<TDto> = {} as TValidField<TDto>;
          Object.keys(dto).forEach((key) => {
            base[key as keyof TDto] =
              errors[key as keyof TDto] || initialValidate;
          });

          setDtoValid(base);
        });
    },
    [dto, getSchema, initDtoValid]
  );

  useEffect(() => {
    const schema = getSchema();
    schema.isValid(dto).then((valid) => {
      const modified = !deepEqual(dto, initialDto());
      setIsValid(valid);
      setIsModified(modified);

      if (valid && modified) {
        onValidDtoReady?.(JSON.stringify(dto));
      } else {
        onValidDtoReady?.(null);
      }
    });
  }, [dto, initialDto, getSchema, onValidDtoReady]);

  const reset = useCallback(() => {
    setDto(initialDto());
    setDtoValid(initDtoValid());
    setIsValid(false);
    setIsModified(false);
  }, [initDtoValid, initialDto]);

  return {
    dto,
    dtoValid,
    handleValueChange,
    isModified,
    isValid,
    reset
  };
}

export default useDtoValidation;
