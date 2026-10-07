import TEntityToolName from '../../entity-tools-types/t-entity-tool-names';

type TButtonDisabledStrategyMap = Record<TEntityToolName, boolean>;

type TButtonContext = {
  selectedCount: number;
  hasFilters: boolean;
  hasSort: boolean;
};

type TStrategyEvaluator = (cts: TButtonContext) => boolean;

const buttonDisabledStrategyRules: Record<
  TEntityToolName,
  TStrategyEvaluator | boolean
> = {
  refresh: false,
  create: false,
  update: (ctx) => {
    return !(ctx.selectedCount === 1);
  },
  remove: (ctx) => {
    return !(ctx.selectedCount === 1);
  },
  report: (ctx) => {
    return ctx.selectedCount === 0;
  },
  filterAllOff: (ctx) => {
    return !ctx.hasFilters;
  },
  filterSettingsOff: (ctx) => {
    return !ctx.hasFilters;
  },
  sortAllOff: (ctx) => {
    return !ctx.hasSort;
  },
  reloadImage: (ctx) => {
    return !(ctx.selectedCount === 1);
  }
};

export const generateButtonDisabledStrategyMap = (
  ctx: TButtonContext
): TButtonDisabledStrategyMap => {
  return Object.fromEntries(
    Object.entries(buttonDisabledStrategyRules).map(([key, evaluator]) => {
      return [key, typeof evaluator === 'boolean' ? evaluator : evaluator(ctx)];
    })
  ) as TButtonDisabledStrategyMap;
};
