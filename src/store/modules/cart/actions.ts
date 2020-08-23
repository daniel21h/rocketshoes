import IProductData from '../../../dtos/IProductData';

function addToCart(product: IProductData) {
  return {
    type: '@cart/ADD',
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

export { addToCart, removeFromCart, updateAmount };
