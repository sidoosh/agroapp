import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {loadProduct} from '../src/actions/';
import productReducer from '../src/reducers';
import rootSaga from '../src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(productReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch(loadProduct());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root'));
