import React from 'react';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { useRoutes } from './app-infrastructure/app-route/routes';
import { COLORS } from './app-infrastructure/app-const/colors';
import { MainMenu } from './app-infrastructure/app-menu/model/main-menu';

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
          <Box
            aria-labelledby='app-container'
            sx={{ overflow: 'hidden', height: '100%' }}
          >
            <MainMenu>{routes}</MainMenu>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
