import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import tenis1Img from '../../assets/images/tenis1.jpg';
import tenis2Img from '../../assets/images/tenis2.jpg';
import tenis3Img from '../../assets/images/tenis3.jpg';
import tenis4Img from '../../assets/images/tenis4.jpg';
import tenis5Img from '../../assets/images/tenis5.jpg';
import tenis6Img from '../../assets/images/tenis6.jpg';

import { ProductList } from './styles';

const Home: React.FC = () => {
  return (
    <ProductList>
      <li>
        <img src={tenis1Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis2Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis3Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis4Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis5Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis6Img} alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFFF" />
            {' 3'}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
