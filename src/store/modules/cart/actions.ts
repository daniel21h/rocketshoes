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

export { addToCart, removeFromCart };
