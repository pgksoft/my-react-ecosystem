import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const DefaultButton = styled(Button)<ButtonProps>(() => {
  return {
    color: 'rgba(0,0,0,0.87)',
    backgroundColor: 'rgb(224,224,224)',
    '&:hover': {
      backgroundColor: 'rgb(210,210,210)'
    }
  };
});
