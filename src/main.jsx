import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
import store from './store'
import i18n from '../src/i18n';
import { I18nextProvider } from 'react-i18next';
const root = document.getElementById('root')

createRoot(root).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
)
