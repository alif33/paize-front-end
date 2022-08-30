import React from "react";
import DotLoader from "react-spinners/DotLoader";
import styled from "styled-components";
import HomeLeftChild from '../../components/HomeLeftChild';
import HomeRightChild from '../../components/HomeRightChild';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';

const HomePage = () => {


  const { admin } = useSelector(state => state);


  console.log(admin);
  return (
    <>
      <Navbar />
      <Container>
        <div className="left">
          <HomeLeftChild />
        </div>
        <div className="right">
          <HomeRightChild />
        </div>
      </Container>
      <div style={{ textAlign: "center" }}>
        {/* <DotLoader /> */}
      </div>
    </>
  );
};

export default HomePage;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 50px 10px 0 10px;
  .left {
    height: 100%;
    width: 50%;
    background-color: honeydew;
  }
  .right {
    height: 100%;
    width: 40%;
  }

  h3 {
    line-height: 20%;
    text-align: center;
    margin-bottom: -1%;
    font-size: 20px;
  }

  h4 {
    line-height: 20%;
    text-align: center;
    //font-size: 20px;
  }
  .enrollText {
    font-size: 20px;
  }
  .text {
    font-size: 17px;
  }
  @media screen and (max-width: 850px) {
    .enrollText {
      font-size: 10px;
    }
    .text {
      font-size: 8px;
    }
  }
  @media (max-width: 992px){
    .left{
      width: 50%;
    }
    .right{
    width: 50%;

    }
  }
  @media (max-width: 768px){
    margin-top: 30px;
    display: block;
    .left{
      width: 100%;
    }
    .right{
    width: 100%;

    }
  }
`;