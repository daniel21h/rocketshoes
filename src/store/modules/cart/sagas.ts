import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

interface IAddToCartData {
  id: number;
}

function* addToCart({ id }: IAddToCartData) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest<string, any>('@cart/ADD_REQUEST', addToCart)]);
