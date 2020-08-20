import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logoImg from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> 3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
};

export default Header;
