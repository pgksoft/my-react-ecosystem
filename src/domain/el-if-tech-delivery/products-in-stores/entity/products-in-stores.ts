import {
  isEntityMember,
  type IEntityMember
} from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import createIsUnknownRecordKeyGuard from '../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import {
  createKeyNames,
  getInitialDetailDto
} from '../../../../app-infrastructure/app-helpers/dto-utils';
import type TypeGuard from '../../../../app-infrastructure/app-types/type-guard';
import { isProduct, type TProduct } from '../../product-dic/entity/product';
import { isShop, type TShop } from '../../shops/entity/shops';

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
  mutationDate: string;
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

export type TProductsInStoresDto = { shop: string; product: string } & Pick<
  TProductsInStores,
  'price'
>;

export const getInitialProductsInStoresDto = (): TProductsInStoresDto => {
  return { shop: '', product: '', price: 0 };
};

export const transformToDto = ({
  shop: { id: shop },
  product: { id: product },
  price
}: TProductsInStores): TProductsInStoresDto => {
  return { shop, product, price };
};

export const getInitialDetailProductsInShopsDto = (entity: unknown) => {
  return getInitialDetailDto(
    entity,
    isProductsInShops,
    getInitialProductsInStoresDto,
    transformToDto
  );
};

export type TKeyProductsInStoresDto = keyof TProductsInStoresDto;

export const keyProductsInStoresDto = createKeyNames<TProductsInStoresDto>(
  getInitialProductsInStoresDto()
);

export const isKeyProductsInStoresDto = createIsUnknownRecordKeyGuard(
  keyProductsInStoresDto
);
