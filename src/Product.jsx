import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { db } from './firebase';
function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection('cartItems').doc(id);
    cartItem.get().then((doc) => {
      console.log(doc);
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection('cartItems').doc(id).set({
          name: title,
          price,
          quantity: 1,
          image,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>Rs {price}</Price>
      <ProductRating>
        <Rating name='read-only' value={rating} readOnly />
      </ProductRating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
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
  cursor: pointer;
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;
