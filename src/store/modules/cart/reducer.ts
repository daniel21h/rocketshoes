import produce from 'immer';

import IProductData from '../../../dtos/IProductData';

interface IAction {
  id?: number;
  type: string;
  product: IProductData;
  amount: number;
}

export default function cart(state: IProductData[] = [], action: IAction) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount;
        }
      });
    }
    default:
      return state;
  }
}
