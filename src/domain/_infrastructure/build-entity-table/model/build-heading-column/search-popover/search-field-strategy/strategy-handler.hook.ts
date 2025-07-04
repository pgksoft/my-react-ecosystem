import { TColumnSchema } from '../../../../table-types/t-table-schema';
import { TStrategyFn, TStrategyMap, TValidTypes } from './strategy-map';

function useStrategyHandler<T extends TColumnSchema>(
  columnSchema: T,
  strategyMap: TStrategyMap
): TStrategyFn<T> {
  const strategy = strategyMap[
    columnSchema.type as TValidTypes
  ] as TStrategyFn<T>;
  return strategy;
}

export default useStrategyHandler;
