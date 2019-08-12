import { all, call, put, takeEvery } from 'redux-saga/effects';
import {LOAD_PRODUCTS, RENDER_PRODUCTS } from '../actions';

export function* fetchProducts() {
  const endpoint = 'http://www.mocky.io/v2/5b3de5ed310000db1f6de257';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();

  yield put({
    type: RENDER_PRODUCTS,
    products: data.responseData.productList,
    isLoading: false
  });
}

export function* loadProducts() {
  yield takeEvery(LOAD_PRODUCTS, fetchProducts);
}

export default function* rootSaga() {
  yield all([loadProducts()]);
}