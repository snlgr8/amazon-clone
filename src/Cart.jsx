import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({ cartItems }) {
  const getTotalPrice = () => {
    // CartItems
    let total = 0;

    cartItems.forEach((data) => {
      total += data.items.price * data.items.quantity;
    });
    return total;
  };

  const getCount = () => {
    let count = 0;
    cartItems.forEach((data) => {
      count += data.items.quantity;
    });
    return count;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />{' '}
      <CartTotal getTotalPrice={getTotalPrice()} getCount={getCount()} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 14px 0 8px;
  align-items: flex-start;
`;
