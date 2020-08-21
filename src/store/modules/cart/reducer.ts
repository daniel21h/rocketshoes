interface IProductData {
  id: string;
  title: string;
  image: string;
  price: number;
  priceFormated: string;
}

interface IAction {
  type: string;
  product: IProductData;
}

export default function cart(state: IProductData[] = [], action: IAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
