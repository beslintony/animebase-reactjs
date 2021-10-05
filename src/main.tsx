import './index.css';

import { ApolloProvider } from '@apollo/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { apolloClient } from './graphql';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root'),
);
