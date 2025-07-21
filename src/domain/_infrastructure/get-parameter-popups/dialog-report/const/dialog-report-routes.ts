import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TDialogReportRoute from '../t-choice-popup-report/t-dialog-report-route';

type TDialogRemoveRoutes = Partial<Record<TEntityNameKeys, TDialogReportRoute>>;

const DIALOG_REPORT_ROUTES: TDialogRemoveRoutes = {
  contact: 'ContactReport',
  todo: 'TodoReport'
};

export default DIALOG_REPORT_ROUTES;
