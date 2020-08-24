import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import IProductData from '../../dtos/IProductData';
import { IRootState } from '../../store/modules/rootReducer';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

interface IHomeProps {
  amount: any;
}

interface IHomeState {
  products: Array<IProductData>;
}

class Home extends Component<IHomeProps, IHomeState> {
  state = {
    products: [],
  };

  componentDidMount() {
    api.get('/products').then((response) => {
      const data = response.data.map((product: IProductData) => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      this.setState({ products: data });
    });
  }

  handleAddProduct = (id: number) => {
    const { addToCartRequest }: any = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products?.map((product: IProductData) => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFFF" />
                {amount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    amount: state.cart.reduce((amount: any, product: IProductData) => {
      amount[product.id] = product.amount;

      return amount;
    }, {}),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(CartActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
