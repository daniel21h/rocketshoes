import IProductData from '../../../dtos/IProductData';

function addToCartRequest(id: number) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

function addToCartSuccess(product: IProductData) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

function removeFromCart(id: number) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

function updateAmount(id: number, amount: number) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export { addToCartRequest, addToCartSuccess, removeFromCart, updateAmount };
