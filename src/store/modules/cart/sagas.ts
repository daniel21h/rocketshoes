import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatPrice } from '../../../utils/format';
import api from '../../../services/api';
import history from '../../../services/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import IProductData from '../../../dtos/IProductData';

interface IAddToCartData {
  id: number;
}

interface IUpdateAmount {
  id: number;
  amount: number;
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
    toast.warn('Quantidade solicitada fora de estoque nesse momento.');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }: IUpdateAmount) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.warn('Quantidade solicitada fora de estoque nesse momento.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest<string, any>('@cart/ADD_REQUEST', addToCart),
  takeLatest<string, any>('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
