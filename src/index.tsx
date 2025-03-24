import { StrictMode } from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
