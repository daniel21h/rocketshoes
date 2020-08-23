import produce from 'immer';

import IProductData from '../../../dtos/IProductData';

interface IAction {
  id?: number;
  type: string;
  product: IProductData;
}

export default function cart(state: IProductData[] = [], action: IAction) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount! += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
