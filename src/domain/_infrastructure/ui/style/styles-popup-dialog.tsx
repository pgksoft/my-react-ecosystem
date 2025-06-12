import { makeStyles } from '@mui/styles';

const useStylesPopupDialog = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '16px',
    paddingRight: '16px',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '12px'
  },
  padding0: {
    padding: 0
  },
  margin0: {
    margin: 0
  },
  columnDirection: { flexDirection: 'column' },
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '48.5%'
  },
  box3Containers: {
    display: 'flex',
    flexDirection: 'column',
    width: '32%'
  },
  boxFooter: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '8px 0',
    width: '100%'
  },
  hrDouble: {
    height: 3,
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
    backgroundColor: 'transparent'
  },
  tableHeadBackColor: {
    backgroundColor: 'hsl(210,100%,93%)'
  },
  tableContainer: {
    width: '100%',
    marginBottom: '1%',
    maxHeight: 200,
    boxSizing: 'border-box',
    border: '1px solid gray'
  },
  tableBorder: {
    border: '1 px solid #cecece'
  },
  tableCellBorder: {
    '&:not(:last-child)': {
      borderRight: '1px solid #cecece'
    }
  },
  tableCellWithComponent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  breakAll: {
    wordBreak: 'break-all'
  },
  overflowAuto: {
    overflow: 'auto'
  },
  colorSecondary: {
    color: 'rgb(252, 75, 108)'
  },
  colorPrimary: {
    color: 'rgb(27, 151, 245)'
  },
  colorGreen: {
    color: 'rgb(57, 203, 127)'
  },
  noChoiceFieldSet: {
    border: '1px solid #f44336!important',
    borderRadius: '4px',
    color: '#f44336!important'
  },
  choiceFieldSet: {
    border: '1px solid lightgrey!important',
    borderRadius: '4px',
    color: '#757575!important '
  },
  tableContainerForm: {
    width: '100%',
    maxHeight: 200,
    boxSizing: 'border-box',
    border: '1px solid gray',
    marginBottom: '12px'
  },
  changeTitle: {
    marginTop: '8px',
    fontWeight: 'bold'
  }
});

export default useStylesPopupDialog;
