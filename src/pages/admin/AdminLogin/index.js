import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdminLoginCard from "../../../components/admin/AdminLoginCard";
import { LOGO } from "../../../__lib__/config";

const AdminLogin = () => { 
  return (
    <Container> 
      <div className="leftChild">
        <div style={{ paddingLeft: "20px" }}>
          <Link to="/">
            {" "}
            <img
              src={LOGO}
              style={{ width: "90px", height: "80px" }}
              alt=""
            />
          </Link>
          <Title>Log in</Title>
        </div>

        <AdminLoginCard />
      </div>
      <div className="rightChild">
        {/* <img src={RegisterImage} id="img" /> */}
        <div className="rightImg"></div>
      </div>
    </Container>
  );
};

export default AdminLogin;

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
  @media only screen and (max-width: 688px) {
    /* display: flex;
   flex-direction: column; */
    flex-direction: column;
    .rightChild {
      display: none;
    }

    .leftChild {
      width: 100%;
    }
  }
  @media only screen and (min-width: 688px) and (max-width: 992px) {
    flex-direction: column;
    .rightChild {
      display: none;
    }

    .leftChild {
      width: 95%;
    }
  }
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  text-align: center;
  line-height: 51px;
  color: #0e3746;
  margin: 0;
  margin-top: 12px;
`;
