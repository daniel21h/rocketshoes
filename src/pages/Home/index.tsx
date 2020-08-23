import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import IProductData from '../../dtos/IProductData';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
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

  handleAddProduct = (product: IProductData) => {
    const { addToCart }: any = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products?.map((product: IProductData) => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFFF" />
                {' 3'}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(CartActions, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
