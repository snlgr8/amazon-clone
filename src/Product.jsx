import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
function Product() {
  return (
    <Container>
      <Title>Ipad pro</Title>
      <Price>Rs 400000</Price>
      <ProductRating>
        <Rating name='read-only' value={4} readOnly />
      </ProductRating>
      <Image src='https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY327_FMwebp_QL65_.jpg' />
      <ActionSection>
        <AddToCartButton>Add to cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const ProductRating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const AddToCartButton = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  height: 30px;
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;
