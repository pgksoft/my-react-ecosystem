import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from './domain/_infrastructure/error-boundary/error-boundary';
import { store } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ErrorBoundary>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
