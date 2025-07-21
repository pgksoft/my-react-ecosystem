import TEntityToolName from '../../entity-tools-types/t-entity-tool-names';

type TButtonDisabledStrategyMap = Record<TEntityToolName, boolean>;

type TStrategyEvaluator = (count: number) => boolean;

const buttonDisabledStrategyRules: Record<
  TEntityToolName,
  TStrategyEvaluator | boolean
> = {
  refresh: false,
  create: false,
  update: (count) => {
    return !(count === 1);
  },
  remove: (count) => {
    return !(count === 1);
  },
  report: (count) => {
    return count === 0;
  }
};

export const generateButtonDisabledStrategyMap = (
  count: number
): TButtonDisabledStrategyMap => {
  return Object.fromEntries(
    Object.entries(buttonDisabledStrategyRules).map(([key, evaluator]) => {
      return [
        key,
        typeof evaluator === 'boolean' ? evaluator : evaluator(count)
      ];
    })
  ) as TButtonDisabledStrategyMap;
};
