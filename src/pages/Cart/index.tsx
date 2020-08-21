import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';

import { IRootState } from '../../store/modules/rootReducer';
import IProductData from '../../dtos/IProductData';

import { Container, ProductTable, Total } from './styles';

interface ICartProps {
  cart: IProductData[];
  dispatch: any;
}

const Cart: React.FC<ICartProps> = ({ cart, dispatch }) => {
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
                  <button type="button">
                    <MdRemoveCircleOutline color="#7159c1" size={21} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
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
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                  }
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

export default connect(mapStateToProps)(Cart);
