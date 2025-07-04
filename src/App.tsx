import React from 'react';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { MainMenu } from './_menu/model/main-menu';
import { useRoutes } from './_route/routes';
import { COLORS } from './_const/colors';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif'
  },
  palette: {
    primary: {
      light: COLORS.primaryLight,
      main: COLORS.primaryMain
    }
  }
});

function App() {
  const routes = useRoutes();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box aria-labelledby='app-container'>
            <MainMenu>{routes}</MainMenu>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
