import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import tenis1Img from '../../assets/images/tenis1.jpg';

import { Container, ProductTable, Total } from './styles';

const Cart: React.FC = () => {
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
          <tr>
            <td>
              <img src={tenis1Img} alt="Tênis" />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" size={21} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" size={21} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete color="#7159c1" size={21} />
              </button>
            </td>
          </tr>
          {/*  */}
          <tr>
            <td>
              <img src={tenis1Img} alt="Tênis" />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" size={21} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" size={21} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete color="#7159c1" size={21} />
              </button>
            </td>
          </tr>
          {/*  */}
          {/*  */}
          <tr>
            <td>
              <img src={tenis1Img} alt="Tênis" />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" size={21} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" size={21} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete color="#7159c1" size={21} />
              </button>
            </td>
          </tr>
          {/*  */}
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

export default Cart;
