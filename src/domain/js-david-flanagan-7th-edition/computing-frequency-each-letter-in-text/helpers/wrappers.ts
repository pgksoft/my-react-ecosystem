import createNestedModalCommandComponent from '../../../../app-infrastructure/modal-commands/create-nested-modal-command-component';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../const/titles';
import SettingControlParameters from '../model/services/setting-control-parameters';
import ViewTableOfData from '../model/services/view-table-of-data';

export const ViewTableOfDataCommandWrapper = createNestedModalCommandComponent(
  TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.viewTableOfData,
  ViewTableOfData,
  'view-table-of-data-command-wrapper',
  {}
);

export const SettingControlParametersCommandWrapper =
  createNestedModalCommandComponent(
    TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.settingControlParameters,
    SettingControlParameters,
    'setting-control-parameters-command-wrapper',
    {}
  );
