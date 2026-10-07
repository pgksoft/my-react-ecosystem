import TChoiceEntityToolIcon from '../../entity-tools-types/t-choice-entity-tool-icon';
import IconCreate from '../tool-icons/icon-create';
import IconFilterAllOff from '../tool-icons/icon-filter-all-off';
import IconFilterSettingsOff from '../tool-icons/icon-filter-settings-off';
import IconReport from '../tool-icons/icon-item-report';
import IconRefresh from '../tool-icons/icon-refresh';
import IconReloadImage from '../tool-icons/icon-reload-image';
import IconRemove from '../tool-icons/icon-remove';
import IconSortAllOff from '../tool-icons/icon-sort-all-off';
import IconUpdate from '../tool-icons/icon-update';

const ChoiceEntityToolIcon = {
  refresh: IconRefresh,
  create: IconCreate,
  update: IconUpdate,
  remove: IconRemove,
  report: IconReport,
  filterAllOff: IconFilterAllOff,
  filterSettingsOff: IconFilterSettingsOff,
  sortAllOff: IconSortAllOff,
  reloadImage: IconReloadImage
} as const satisfies TChoiceEntityToolIcon;

export default ChoiceEntityToolIcon;
