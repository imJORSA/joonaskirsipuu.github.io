import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './locales/i18n';

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrate(app, root);
} else {
  render(app, root);
}