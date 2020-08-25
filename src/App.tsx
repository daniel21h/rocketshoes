import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import history from './services/history';

import Header from './components/Header';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
