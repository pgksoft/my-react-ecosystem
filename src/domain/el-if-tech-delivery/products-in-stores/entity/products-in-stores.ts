import {
  isEntityMember,
  type IEntityMember
} from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import createIsUnknownRecordKeyGuard from '../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../app-infrastructure/app-helpers/dto-utils';
import type { TDeepKeyOf } from '../../../../app-infrastructure/app-types/t-deep-key-of';
import type TValueOf from '../../../../app-infrastructure/app-types/t-value-of';
import type TypeGuard from '../../../../app-infrastructure/app-types/type-guard';
import { isProduct, type TProduct } from '../../product-dic/entity/product';
import { isShop, type TShop } from '../../shops/entity/shops';
import formDtoSerialization from '../../../../app-infrastructure/app-helpers/form-dto-serialization/';
import type {
  TGetDetailInitialValidationDto,
  TGetInitialValidationDto
} from '../../../../app-infrastructure/yup/types';
import type TUnknownRecord from '../../../../app-infrastructure/app-types/t-unknown-record';

export type TFileMeta = {
  originalname: string;
  mimetype: string;
  size: number;
};

export type TProductsInStores = {
  shop: TShop;
  product: TProduct;
  fileMeta: TFileMeta;
  price: number;
  mutationDate: Date;
} & IEntityMember;

export const isFileMeta: TypeGuard<TFileMeta> = (value): value is TFileMeta => {
  return (
    value !== null &&
    typeof value === 'object' &&
    'originalname' in value &&
    typeof value.originalname === 'string' &&
    'mimetype' in value &&
    typeof value.mimetype === 'string' &&
    'size' in value &&
    typeof value.size === 'number'
  );
};

export const isProductsInShops: TypeGuard<TProductsInStores> = (
  value
): value is TProductsInStores => {
  return (
    isEntityMember(value) &&
    'shop' in value &&
    isShop(value.shop) &&
    'product' in value &&
    isProduct(value.product) &&
    'fileMeta' in value &&
    isFileMeta(value.fileMeta) &&
    'price' in value &&
    typeof value.price === 'number' &&
    'mutationDate' in value &&
    typeof value.mutationDate === 'string'
  );
};

export type TProductsInStoresDto = {
  shop: string;
  product: string;
  image: File;
} & Pick<TProductsInStores, 'price'>;

export type TProductsInStoresValidationDto = Pick<
  TProductsInStores,
  'shop' | 'product' | 'price'
> & {
  images: FileList | null;
};
export type TKeyProductsInStoresValidationDto =
  keyof TProductsInStoresValidationDto;
export type TValueValidationProductsInStoresDto =
  TValueOf<TProductsInStoresValidationDto>;

const getBaseInitialProductsInStoresValidationDto =
  (): TProductsInStoresValidationDto => {
    return {
      shop: { id: '', name: '', rating: 0, mutationDate: '' },
      product: {
        id: '',
        name: '',
        category: { id: '', name: '', mutationDate: '' },
        mutationDate: ''
      },
      price: 0,
      images: null
    };
  };

export const getInitialCreateProductsInStoresValidationDto: TGetInitialValidationDto<
  TProductsInStoresValidationDto
> = ({ isSerialization }) => {
  if (isSerialization) {
    const dtoSerialization =
      formDtoSerialization.Get<TProductsInStoresValidationDto>(
        'ShopProductCreate'
      );
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getBaseInitialProductsInStoresValidationDto(),
    isSerialization: false
  };
};

export const transformCreateValidationDtoToDto = (
  validationCrateDTO: TProductsInStoresValidationDto
): FormData | null => {
  const {
    shop: { id: shop },
    product: { id: product },
    price,
    images
  } = validationCrateDTO;
  if (!images || images.length === 0) return null;
  const file = images[0];
  const fd = new FormData();
  fd.append('shop', shop);
  fd.append('product', product);
  fd.append('price', String(price * 100));
  fd.append('image', file, file.name);
  return fd;
};

export const getInitialDetailProductsInStoresValidationDto: TGetDetailInitialValidationDto<
  TProductsInStoresValidationDto
> = (options) => {
  const { isSerialization, entity } = options;
  if (isSerialization) {
    const dtoSerialization =
      formDtoSerialization.Get<TProductsInStoresValidationDto>(
        'ShopProductDetail'
      );
    if (dtoSerialization)
      return { validationDto: dtoSerialization, isSerialization: true };
  }
  return {
    validationDto: getInitialDetailDto(
      entity,
      isProductsInShops,
      getBaseInitialProductsInStoresValidationDto,
      (entity) => {
        const { product, shop, price: normalizePrice } = entity;
        return { product, shop, price: normalizePrice / 100, images: null };
      }
    ),
    isSerialization: false
  };
};

export const transformDetailValidationDtoToDto = (
  validationCrateDTO: TProductsInStoresValidationDto
): FormData | TUnknownRecord | null => {
  const {
    shop: { id: shop },
    product: { id: product },
    price,
    images
  } = validationCrateDTO;
  if (!images || images.length === 0)
    return {
      shop,
      product,
      price: String(price * 100)
    };
  const file = images[0];
  const fd = new FormData();
  fd.append('shop', shop);
  fd.append('product', product);
  fd.append('price', String(price * 100));
  fd.append('image', file, file.name);
  return fd;
};

export type TKeyProductsInStoresDto = keyof TProductsInStoresDto;

export type TKeyProductsInStore = TDeepKeyOf<TProductsInStores>;

export const keyProductsInStoresValidationDto = createKeyNames(
  getBaseInitialProductsInStoresValidationDto()
);

export const isKeyProductsInStoresValidationDto = createIsUnknownRecordKeyGuard(
  keyProductsInStoresValidationDto
);
