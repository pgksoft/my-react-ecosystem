import React, { type FC } from 'react';
import type ICreateDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/i-create-dialog';
import useDtoValidation from '../../../../app-infrastructure/yup/dto-validation.hook';
import {
  getInitialCreateProductsInStoresValidationDto,
  keyProductsInStoresValidationDto,
  transformCreateValidationDtoToDto,
  type TProductsInStoresValidationDto
} from '../entity/products-in-stores';
import {
  getInitialProductsInStoresDtoValid,
  getProductsInStoreCreateValidationSchema,
  type TProductsInStoresValidateSchema
} from '../entity/validation-schema';
import useFormResetSync from '../../../../app-infrastructure/form/form-reset-sync.hook';
import TextFieldInput from '../../../../app-infrastructure/app-ui/text-field-input/text-field-input';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from '../const/titles';
import { SelectingEntityItemsWrapper } from '../../../../app-infrastructure/app-ui/selecting-entity-items-wrapper';
import { AsyncAutoComplete } from '../../../../app-infrastructure/app-ui/async-autocomplete';
import {
  getShopId,
  getShopOptionLabel,
  shopFetchAll,
  type TShop
} from '../../shops/entity/shops';
import ShopBriefDescription from '../../shops/ui/shop-brief-description';
import {
  getProductId,
  getProductOptionLabel,
  productFetchAll,
  type TProduct
} from '../../product-dic/entity/product';
import ProductBriefDescription from '../../product-dic/helpers/product-brief-description';
import { FileUploadButton } from '../../../../app-infrastructure/app-ui/file-upload-input/file-upload-button';
import { SUPPORTED_IMAGE_FORMATS } from '../../../../app-infrastructure/yup/validation-messages';
import { COLORS } from '../../../../app-infrastructure/app-const/colors';
import { Box, Typography } from '@mui/material';
import TITLES_DELIVERY_SHOPS from '../../shops/const/titles';
import RatingView from '../../../../app-infrastructure/app-ui/rating-view';
import TITLES_DELIVERY_PRODUCT from '../../product-dic/const/titles';

const renderShopCard = (item: TShop) => {
  return <ShopBriefDescription shop={item} variant='body1' />;
};

const renderProductCard = (item: TProduct) => {
  return <ProductBriefDescription product={item} variant='body1' />;
};

const acceptImageFormat = SUPPORTED_IMAGE_FORMATS.join();

const ProductsInStoresCreate: FC<ICreateDialog> = ({ onCreateDtoReady }) => {
  const { dto, dtoValid, handleValueChange, reset, isModified } =
    useDtoValidation<
      TProductsInStoresValidationDto,
      FormData | null,
      TProductsInStoresValidateSchema,
      TProductsInStoresValidationDto
    >({
      getInitialValidationDto: getInitialCreateProductsInStoresValidationDto,
      initDtoValid: getInitialProductsInStoresDtoValid,
      getSchema: getProductsInStoreCreateValidationSchema,
      onValidDtoReady: onCreateDtoReady,
      transformToDto: transformCreateValidationDtoToDto,
      formDtoKey: 'ShopProductCreate'
    });

  useFormResetSync(reset, isModified);

  return (
    <>
      <SelectingEntityItemsWrapper
        entityNameKey='shop'
        cascadeParams={{ returnPopup: 'ShopProductCreate' }}
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
        cascadeParams={{ returnPopup: 'ShopProductCreate' }}
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
            color: !dtoValid.images.valid ? COLORS.error : COLORS.primaryLight
          }
        }}
      />
    </>
  );
};

export default ProductsInStoresCreate;
