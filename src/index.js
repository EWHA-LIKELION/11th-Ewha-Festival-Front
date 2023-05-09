import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { store } from './redux/store';
import ScrollToTop from './components/_common/useScroll';
export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
