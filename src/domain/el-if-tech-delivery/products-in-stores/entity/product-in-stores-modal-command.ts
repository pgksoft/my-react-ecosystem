import { createKeyNames } from '../../../../app-infrastructure/app-helpers/dto-utils';
import formDtoSerialization from '../../../../app-infrastructure/app-helpers/form-dto-serialization';
import type TValueOf from '../../../../app-infrastructure/app-types/t-value-of';
import type { TGetDetailInitialValidationDto } from '../../../../app-infrastructure/yup/types';

export type TReloadImageCommandValidationDto = {
  images: FileList | null;
};

const getBaseInitialReloadImageCommandValidationDto =
  (): TReloadImageCommandValidationDto => {
    return {
      images: null
    };
  };

export const getInitialReloadImageCommandValidationDto: TGetDetailInitialValidationDto<
  TReloadImageCommandValidationDto
> = (options) => {
  const { isSerialization, formDtoKey = 'ShopProductCommandReloadImage' } =
    options;
  if (isSerialization) {
    const dtoSerialization =
      formDtoSerialization.Get<TReloadImageCommandValidationDto>(formDtoKey);
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getBaseInitialReloadImageCommandValidationDto(),
    isSerialization: false
  };
};

export const transformReloadImageCommandValidationDtoToDto = (
  validationDTO: TReloadImageCommandValidationDto
): FormData | null => {
  const { images } = validationDTO;
  if (!images || images.length === 0) return null;
  const file = images[0];
  const fd = new FormData();
  fd.append('image', file, file.name);
  return fd;
};

export type TKeyReloadImageCommandValidationDto =
  keyof TReloadImageCommandValidationDto;
export type TValueReloadImageCommandValidationDto =
  TValueOf<TReloadImageCommandValidationDto>;

export const keyReloadImageCommandValidationDto = createKeyNames(
  getBaseInitialReloadImageCommandValidationDto()
);
