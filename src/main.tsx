import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { globalStyles, additionalStyles } from './styles/global';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={css(globalStyles, additionalStyles)} />
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
);
