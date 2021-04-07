import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

function CartTotal({ getTotalPrice, getCount }) {
  return (
    <Container>
      <Subtotal>
        Subtotal {getCount} Item(s):
        <NumberFormat
          value={getTotalPrice}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rs'}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
      </Subtotal>
      <CheckoutButton>Proceed to Buy</CheckoutButton>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  height: 200px;
  flex: 0.3;
  padding: 20px;
`;

const Subtotal = styled.div`
  //padding: 10px 12px;
  margin-bottom: 16px;
  display: flex;
`;
const CheckoutButton = styled.button`
  background-color: #f0c14b;
  border: 2px none #a88734;
  border-radius: 9px;
  height: 30px;
  cursor: pointer;
  width: 100%;
  :hover {
    background-color: #ddb347;
  }
`;
