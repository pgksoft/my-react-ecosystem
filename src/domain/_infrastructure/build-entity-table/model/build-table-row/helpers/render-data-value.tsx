import React from 'react';
import { List, ListItem } from '@mui/material';
import { TFieldValue } from '../../../table-types/t-data-table';
import getRandomUuid from '../../../../helpers/get-random-uuid';

const renderDataValue = (values: TFieldValue) => {
  if (Array.isArray(values)) {
    return (
      <List sx={{ w: '100%' }} dense={true}>
        {values.map((value) => {
          return <ListItem key={getRandomUuid()}>{value}</ListItem>;
        })}
      </List>
    );
  }
  return values;
};

export default renderDataValue;
