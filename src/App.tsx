import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
