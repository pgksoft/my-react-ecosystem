import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';

type TParameterizedDialogReportRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}Report`;

export type TDialogReportRoute =
  TParameterizedDialogReportRoute<TEntityNameKeys>;

type TEntityDialogReportRouts = {
  [K in TEntityNameKeys]: TParameterizedDialogReportRoute<K>;
};

type TListDialogReportRoutes = Partial<TEntityDialogReportRouts>;

const LIST_DIALOG_REPORT_ROUTES = {
  contact: 'ContactReport',
  todo: 'TodoReport'
} as const satisfies TListDialogReportRoutes;

export default LIST_DIALOG_REPORT_ROUTES;
