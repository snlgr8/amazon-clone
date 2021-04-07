import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem.items} id={cartItem.id} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;
const Container = styled.div`
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
`;
const Title = styled.div`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
