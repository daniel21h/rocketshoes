import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../utils/format';
import api from '../../../services/api';
import { addToCartSuccess, updateAmount } from './actions';
import IProductData from '../../../dtos/IProductData';

interface IAddToCartData {
  id: number;
}

function* addToCart({ id }: IAddToCartData) {
  const productExist = yield select((state) =>
    state.cart.find((p: IProductData) => p.id === id),
  );

  if (productExist) {
    const amount = productExist.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest<string, any>('@cart/ADD_REQUEST', addToCart)]);
