import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SchoolInfo from '../../components/SchoolInfo';

const SchoolInformation = () => {
    return (
        <Container>

            <div className="leftChild">
                <div style={{ paddingLeft: "20px" }}>
                    <Link to="/">    <img src="/img/icon/logo.svg" style={{ width: "90px", height: "80px" }} alt="" /></Link>
                    <Title>
                    School Information
                    </Title>
                </div>

                <SchoolInfo/>

            </div>
            <div className="rightChild">
                {/* <img src={RegisterImage} id="img" /> */}
                <div className="rightImg"></div>
            </div>
        </Container>
    );
};

export default SchoolInformation;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .bgImage {
    position: fixed;
    bottom: 0;
    background-position-x: right;
    background: url('/img/icon/register-image.svg');
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  #img {
    display: block;
    width: 44vw;
    align-self: center;
    height: 100vh;
    object-fit: cover;
  }
  .leftChild {
    height: 90%;
    width: 60%;
    padding-top: 1%;
    padding-left: 1%;
    display: flex;
    flex-direction: column;
  }
  .rightChild {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    cursor: pointer;
  }
  .rightImg {
    width: 680px;
    height: 100vh;
    background-image: url('/img/icon/register-image.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Title = styled.h3`
 font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 41px;
line-height: 62px;
color: #0E3746;
margin: 0;
`;
