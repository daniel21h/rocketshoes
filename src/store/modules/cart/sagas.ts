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

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('erro');
    return;
  }

  if (productExist) {
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
