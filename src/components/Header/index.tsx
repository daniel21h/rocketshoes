import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import logoImg from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

import { IRootState } from '../../store/modules/rootReducer';

const Header: React.FC = ({ cartSize }: any) => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span> {cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
};

export default connect((state: IRootState) => ({
  cartSize: state.cart.length,
}))(Header);
