import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import backgroundImg from '../assets/images/background-img.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root{
    --color-background: #191920;
    --color-text-white: #FFFF;
    --color-text-gray: #999;
    --color-background-white: #FFFF;
    --color-title-product: #333;
    --color-button: #7159c1;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--color-background) url(${backgroundImg}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
