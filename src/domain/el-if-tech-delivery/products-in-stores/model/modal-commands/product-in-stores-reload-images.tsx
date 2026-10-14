import React, { useCallback, type FC } from 'react';
import type { TModalCommandDetailDialog } from '../../../../../app-infrastructure/modal-commands/t-modal-command-dialog/t-modal-command-detail-dialog';
import type { IEntityMember } from '../../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import type { TGetInitialValidationDto } from '../../../../../app-infrastructure/yup/types';
import {
  getInitialReloadImageCommandValidationDto,
  keyReloadImageCommandValidationDto,
  transformReloadImageCommandValidationDtoToDto,
  type TReloadImageCommandValidationDto
} from '../../entity/product-in-stores-modal-command';
import useDtoValidation from '../../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialReloadImageCommandDtoValid,
  getReloadImageCommandValidationSchema,
  type TReloadImageCommandValidateSchema
} from '../../entity/validation-schema-reload-image-command';
import useFormResetSync from '../../../../../app-infrastructure/form/form-reset-sync.hook';
import { Grid, Stack, Typography } from '@mui/material';
import { FileUploadButton } from '../../../../../app-infrastructure/app-ui/file-upload-input/file-upload-button';
import { acceptImageFormat } from '../../../../../app-infrastructure/yup/validation-messages';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from '../../const/titles';
import { COLORS } from '../../../../../app-infrastructure/app-const/colors';
import { isProductsInShops } from '../../entity/products-in-stores';
import { ProductsInShopsImageView } from '../../ui/products-in-shops-image-view';
import toISOStringLocaleTime from '../../../../../app-infrastructure/app-helpers/to-iso-string-locale-time';
import ProductBriefDescription from '../../../product-dic/helpers/product-brief-description';
import ShopBriefDescription from '../../../shops/ui/shop-brief-description';
import getPriceToShow from '../../../../../app-infrastructure/app-helpers/get-price-to-show';

export const ProductInStoresReloadImage: FC<
  TModalCommandDetailDialog<IEntityMember>
> = ({ entity, onDtoReady }) => {
  const getInitialValidationDto: TGetInitialValidationDto<TReloadImageCommandValidationDto> =
    useCallback(
      ({ isSerialization }) => {
        return getInitialReloadImageCommandValidationDto({
          isSerialization,
          entity
        });
      },
      [entity]
    );

  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TReloadImageCommandValidationDto,
      FormData | null,
      TReloadImageCommandValidateSchema,
      TReloadImageCommandValidationDto
    >({
      getInitialValidationDto: getInitialValidationDto,
      initDtoValid: getInitialReloadImageCommandDtoValid,
      getSchema: getReloadImageCommandValidationSchema,
      onValidDtoReady: onDtoReady,
      transformToDto: transformReloadImageCommandValidationDtoToDto,
      formDtoKey: 'ShopProductCommandReloadImage'
    });

  useFormResetSync(reset, isModified);

  return (
    <>
      {isProductsInShops(entity) && (
        <Stack spacing={1}>
          <ProductBriefDescription product={entity.product} variant='body1' />
          <ShopBriefDescription shop={entity.shop} variant='body1' />
          <Stack direction='row' spacing={1} flexWrap='wrap'>
            <Typography color='textSecondary' sx={{ fontStyle: 'italic' }}>
              {TITLES_DELIVERY_PRODUCTS_IN_STORES.price}:
            </Typography>
            <Typography>{getPriceToShow(entity.price)}</Typography>
          </Stack>
        </Stack>
      )}
      <Grid container spacing={1}>
        <Grid size={10.7}>
          <FileUploadButton
            fieldName={keyReloadImageCommandValidationDto.images}
            isValid={dtoValid.images.valid}
            errorMessage={dtoValid.images.errorMsg}
            value={dto.images}
            customOnChange={handleValueChange}
            accept={acceptImageFormat}
            label={TITLES_DELIVERY_PRODUCTS_IN_STORES.uploadImage}
            showPreview
            dragDrop
            buttonProps={{
              sx: {
                width: '100%',
                color: !dtoValid.images.valid
                  ? COLORS.error
                  : COLORS.primaryLight
              }
            }}
          />
        </Grid>
        <Grid size={1.3} alignContent='center' alignItems='center'>
          {isProductsInShops(entity) && (
            <ProductsInShopsImageView
              id={entity.id}
              mutationDate={toISOStringLocaleTime(entity.mutationDate)}
              sxAvatar={{
                width: '100%',
                height: '90%',
                '--img-filter': dto.images
                  ? 'blur(1.5px) grayscale(70%) contrast(130%) opacity(70%)'
                  : 'none'
              }}
              sxAvatarImg={{
                filter: 'var(--img-filter)',
                transition: 'filter .5s'
              }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
