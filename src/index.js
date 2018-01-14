import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
// import reducers from './reducers';

const API_KEY = 'AIzaSyDP5473ZCqGZTeph3YTII4EzsStdUL7Lc4';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // {/* </Provider> */}
  , document.querySelector('.container')
);
