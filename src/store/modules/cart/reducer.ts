import IProductData from '../../../dtos/IProductData';

interface IAction {
  type: string;
  product: IProductData;
}

export default function cart(state: IProductData[] = [], action: IAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.product, amount: 1 }];
    default:
      return state;
  }
}
