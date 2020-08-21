import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

export interface IProductData {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormated?: string;
}

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
    const { dispatch }: any = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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

export default connect()(Home);
