import React from 'react';
import styled from 'styled-components';
import Product from './Product';
function Home() {
  return (
    <Container>
      <Banner></Banner>

      <Content>
        <Product />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Banner = styled.div`
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 300px;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -300px;
  display: flex;
`;
