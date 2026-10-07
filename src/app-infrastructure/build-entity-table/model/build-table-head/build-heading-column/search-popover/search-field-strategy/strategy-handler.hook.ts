/* eslint-disable prettier/prettier */
import { TColumnSchema } from '../../../../../table-types/t-table-schema';
import { TStrategyFn, TStrategyMap, TValidTypes } from './strategy-map';

function useStrategySearchHandler<T extends TColumnSchema<string>>(
  columnSchema: T,
  strategyMap: TStrategyMap
): TStrategyFn<T> {
  const strategy = strategyMap[
    columnSchema.type as TValidTypes
  ] as TStrategyFn<T>;
  return strategy;
}

export default useStrategySearchHandler;
