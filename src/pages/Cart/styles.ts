import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: var(--color-background-white);
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      padding: 12px 20px;

      border: 0;
      border-radius: 4px;
      background: var(--color-button);
      color: var(--color-text-white);
      font-weight: bold;
      text-transform: uppercase;
      overflow: hidden;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: var(--color-text-gray);
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #ddd;
  }

  img {
    height: 100px;
  }

  strong {
    color: var(--color-text-gray);
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    margin-right: 10px;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
