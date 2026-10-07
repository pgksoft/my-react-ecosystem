import React, { useCallback, useEffect, type FC } from 'react';
import type TDetailDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import type { TGetInitialValidationDto } from '../../../../app-infrastructure/yup/types';
import {
  getInitialDetailProductsInStoresValidationDto,
  isProductsInShops,
  keyProductsInStoresValidationDto,
  transformDetailValidationDtoToDto,
  type TProductsInStoresValidationDto
} from '../entity/products-in-stores';
import ProductInStoresBriefDescription from '../ui/product-in-stores-brief-description';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import type TUnknownRecord from '../../../../app-infrastructure/app-types/t-unknown-record';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import {
  getInitialProductsInStoresDtoValid,
  getProductsInStoreUpdateValidationSchema,
  type TProductsInStoresValidateSchema
} from '../entity/validation-schema';
import { SelectingEntityItemsWrapper } from '../../../../app-infrastructure/app-ui/selecting-entity-items-wrapper';
import { AsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from '../const/titles';
import {
  getShopId,
  getShopOptionLabel,
  shopFetchAll,
  type TShop
} from '../../shops/entity/shops';
import {
  getProductId,
  getProductOptionLabel,
  productFetchAll,
  type TProduct
} from '../../product-dic/entity/product';
import ShopBriefDescription from '../../shops/ui/shop-brief-description';
import ProductBriefDescription from '../../product-dic/helpers/product-brief-description';
import { SUPPORTED_IMAGE_FORMATS } from '../../../../app-infrastructure/yup/validation-messages';
import { Box, Typography } from '@mui/material';
import TITLES_DELIVERY_SHOPS from '../../shops/const/titles';
import RatingView from '../../../../app-infrastructure/app-ui/rating-view';
import TITLES_DELIVERY_PRODUCT from '../../product-dic/const/titles';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import { FileUploadButton } from '../../../../app-infrastructure/app-ui/file-upload-input/file-upload-button';
import { COLORS } from '../../../../app-infrastructure/app-const/colors';
import { Grid } from '@mui/system';
import { ProductsInShopsImageView } from '../ui/products-in-shops-image-view';
import toISOStringLocaleTime from '../../../../app-infrastructure/app-helpers/to-iso-string-locale-time';

const renderShopCard = (item: TShop) => {
  return <ShopBriefDescription shop={item} variant='body1' />;
};

const renderProductCard = (item: TProduct) => {
  return <ProductBriefDescription product={item} variant='body1' />;
};

const acceptImageFormat = SUPPORTED_IMAGE_FORMATS.join();

const ProductInStoresDetail: FC<TDetailDialog<IEntityMember>> = ({
  entity,
  onUpdateDtoReady,
  getBriefDescription
}) => {
  const getInitialValidationDto: TGetInitialValidationDto<TProductsInStoresValidationDto> =
    useCallback(
      ({ isSerialization }) => {
        return getInitialDetailProductsInStoresValidationDto({
          isSerialization,
          entity
        });
      },
      [entity]
    );

  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TProductsInStoresValidationDto,
      FormData | TUnknownRecord | null,
      TProductsInStoresValidateSchema,
      TProductsInStoresValidationDto
    >({
      getInitialValidationDto: getInitialValidationDto,
      initDtoValid: getInitialProductsInStoresDtoValid,
      getSchema: getProductsInStoreUpdateValidationSchema,
      onValidDtoReady: onUpdateDtoReady,
      transformToDto: transformDetailValidationDtoToDto,
      formDtoKey: 'ShopProductDetail'
    });

  useFormResetSync(reset, isModified);

  useEffect(() => {
    if (isProductsInShops(entity)) {
      getBriefDescription(
        <ProductInStoresBriefDescription productInStores={entity} />
      );
    }
  }, [entity, getBriefDescription]);

  return (
    <>
      <SelectingEntityItemsWrapper
        entityNameKey='shop'
        cascadeParams={{ returnPopup: 'ShopProductDetail' }}
      >
        <AsyncAutoComplete
          inputKind='yup'
          label={TITLES_DELIVERY_PRODUCTS_IN_STORES.store}
          textFieldProps={{
            helperText: TITLES_DELIVERY_PRODUCTS_IN_STORES.choiceStore
          }}
          fieldName={keyProductsInStoresValidationDto.shop}
          isValid={dtoValid.shop.valid}
          errorMessage={dtoValid.shop.errorMsg}
          value={dto.shop}
          customOnChange={handleValueChange}
          fetchAll={shopFetchAll}
          getOptionLabel={getShopOptionLabel}
          getId={getShopId}
          renderCard={renderShopCard}
          sx={{ mt: 2 }}
        />
      </SelectingEntityItemsWrapper>
      {!!dto.shop && !!dto.shop.name && (
        <Box sx={{ display: 'flex', gap: 0.5, mt: 0.7 }}>
          <Typography color='textSecondary' sx={{ fontStyle: 'italic' }}>
            {TITLES_DELIVERY_SHOPS.rating}:
          </Typography>
          <RatingView defaultValue={dto.shop.rating} />
        </Box>
      )}
      <SelectingEntityItemsWrapper
        entityNameKey='productDic'
        cascadeParams={{ returnPopup: 'ShopProductDetail' }}
      >
        <AsyncAutoComplete
          inputKind='yup'
          label={TITLES_DELIVERY_PRODUCTS_IN_STORES.product}
          textFieldProps={{
            helperText: TITLES_DELIVERY_PRODUCTS_IN_STORES.choiceProduct
          }}
          fieldName={keyProductsInStoresValidationDto.product}
          isValid={dtoValid.product.valid}
          errorMessage={dtoValid.product.errorMsg}
          value={dto.product}
          customOnChange={handleValueChange}
          fetchAll={productFetchAll}
          getOptionLabel={getProductOptionLabel}
          getId={getProductId}
          renderCard={renderProductCard}
          sx={{ mt: 2 }}
        />
      </SelectingEntityItemsWrapper>
      {!!dto.product && !!dto.product.name && (
        <Box sx={{ display: 'flex', gap: 0.5, mt: 0.7 }}>
          <Typography color='textSecondary' sx={{ fontStyle: 'italic' }}>
            {TITLES_DELIVERY_PRODUCT.category}:
          </Typography>
          <Typography>{dto.product.category.name}:</Typography>
        </Box>
      )}
      <TextFieldInput
        inputKind='yup'
        fieldName={keyProductsInStoresValidationDto.price}
        isValid={dtoValid.price.valid}
        errorMessage={dtoValid.price.errorMsg}
        label={TITLES_DELIVERY_PRODUCTS_IN_STORES.price}
        value={dto.price}
        customOnChange={handleValueChange}
        sx={{ mt: 2 }}
        isIntNumber
      />
      <Grid container spacing={1}>
        <Grid size={10.7}>
          <FileUploadButton
            fieldName={keyProductsInStoresValidationDto.images}
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

export default ProductInStoresDetail;
