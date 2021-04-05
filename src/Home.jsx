import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import background from './image.jpg';
function Home() {
  return (
    <Container>
      <Banner></Banner>

      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500 px;
  margin: auto;
`;

const Banner = styled.div`
  background-image: url(${background});
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
`;

const Content = styled.div`
  // background: white;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;

  display: flex;
`;
