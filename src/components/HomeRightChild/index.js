import React from 'react';
import styled from 'styled-components';

const HomeRightChild = () => {
  return (
    <Container>
      <div className="firstImagesColumn">
        <img src="/img/icon/cycle.svg" style={{ width: 160, height: 160, marginTop: 20 }} alt="" />

        <img src="/img/icon/bag.svg" style={{ width: 160, height: 160, marginTop: 20 }} alt="" />
      </div>
      <div className="secondImagesColumn">
        <img
          src="/img/icon/books.svg"
          style={{ width: 160, height: 160, marginBottom: 20 }}
          alt=""
        />

        <img
          src='/img/icon/table.svg'
          style={{ width: 160, height: 160, marginBottom: 20 }}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HomeRightChild;


const Container = styled.div`
  background-color: white;
  /* height: 80vh; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .firstImagesColumn {
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20;
  }
  .secondImagesColumn {
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 40px;
  }
  h2 {
    text-align: center;
  }
  .imgsDiv {
    //background-color: aqua;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20;
    justify-content: space-around;
  }
  .imgDiv {
    width: 15%;
    background-color: antiquewhite;
    height: 0%;
    padding-top: 200;
  }
  img {
    height: 100%;
    width: 100%;
    @media (max-width: 576px){
      width: 115px !important;
    height: auto;

    }
  }
`;
