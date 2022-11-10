import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ForgetPasswordCard from "../../components/ForgetPasswordCard/ForgetPasswordCard";
import LoginCard from "../../components/LoginCard";

const ForgetPassword = () => {
  return (
    <Container>
      <div className="leftChild">
        <div style={{ paddingLeft: "20px" }}>
          <Link to="/">
            {" "}
            <img
              src="/img/icon/logo.svg"
              style={{ width: "90px", height: "80px" }}
              alt=""
            />
          </Link>
          <Title>Forget Password</Title>
        </div>

        <ForgetPasswordCard />
      </div>
      <div className="rightChild">
        {/* <img src={RegisterImage} id="img" /> */}
        <div className="rightImg"></div>
      </div>
    </Container>
  );
};

export default ForgetPassword;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .bgImage {
    position: fixed;
    bottom: 0;
    background-position-x: right;
    background: url("/img/icon/register-image.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .leftChild {
    height: 90%;
    width: 52%;
    padding-top: 1%;
    padding-left: 1%;
    display: flex;
    flex-direction: column;
  }
  .rightChild {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
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
    background-image: url("/img/icon/register-image.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 51px;
  text-align: center;
  color: #0e3746;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 0;
  padding-right: 0;
  margin-top: 12px;
`;
