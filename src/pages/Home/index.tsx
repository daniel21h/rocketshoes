import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

interface IProductData {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface IProductDataFormated extends IProductData {
  priceFormated: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProductDataFormated[]>();

  useEffect(() => {
    api.get('/products').then((response) => {
      const data = response.data.map((product: IProductData) => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      setProducts(data);
    });
  }, []);

  return (
    <ProductList>
      {products?.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="Tênis" />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button">
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
};

export default Home;
