import React from 'react';
import styled from 'styled-components';

const HomeRightChild = () => {
  return (
    <Container>
      <img className="header-img1" src="/img/icon/cycle.svg" alt="" />
      <img className="header-img2" src="/img/icon/bag.svg" alt="" />
      <img className="header-img3" src="/img/icon/books.svg" alt="" />
      <img className="header-img4" src='/img/icon/table.svg' alt="" />
    </Container>
  );
};

export default HomeRightChild;


const Container = styled.div`
  background-color: white;
  height: 382px;
  width: 530px;
  position: relative;
  margin: auto;
    margin-bottom: 92px;

  img {
    margin-top: 20px;
    position: absolute;
  width: 160px;
  height: 160px;
 @media(max-width: 481px){
  width: 124px;
  height: 124px;
 }
  }
  @media (max-width: 576px){
    width: 450px !important;
  }
  @media(max-width: 481px){
    width: 281px !important;
    height: 298px;
  }
`;
