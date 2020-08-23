import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IRootState } from '../../store/modules/rootReducer';
import * as CartActions from '../../store/modules/cart/actions';
import IProductData from '../../dtos/IProductData';

import { Container, ProductTable, Total } from './styles';

interface ICartProps {
  cart: IProductData[];
  removeFromCart(id: number): any;
  updateAmount(id: number, amount: number | undefined): any;
}

const Cart: React.FC<ICartProps> = ({ cart, removeFromCart, updateAmount }) => {
  function increment(product: IProductData): void {
    updateAmount(product.id, product.amount! + 1);
  }

  function decrement(product: IProductData): void {
    updateAmount(product.id, product.amount! - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>NOME</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map((product: IProductData) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt="Tênis" />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline color="#7159c1" size={21} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline color="#7159c1" size={21} />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 258,80</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete color="#7159c1" size={21} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = (state: IRootState) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
