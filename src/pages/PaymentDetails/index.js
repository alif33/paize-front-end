import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardForm from "../../components/CardForm";
import Navbar from "../../components/Navbar";

const PaymentDetails = () => {
  return (
    <>
      <Navbar />
      <Container> 
        <Title>Settings</Title>

        <TapGroup>
          <Link to="/update-Information">Personal Information</Link>
          <Link to="/payment-details" className="active">
            Payment Details
          </Link>
        </TapGroup>
        <CardForm />
      </Container>
    </>
  );
};

export default PaymentDetails;

const Container = styled.div`
  margin: auto;
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 62px;
  color: #0e3746;
  margin: 0;
  text-transform: capitalize;
  padding: 20px 0px;
  margin: 8px 0;
`;

const TapGroup = styled.div`
  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: rgba(14, 55, 70, 0.4);
    background: #ffffff;
    border: 2px solid rgba(14, 55, 70, 0.4);
    border-radius: 12px;
    text-decoration: none;
    padding: 8px 18px;
    margin-right: 30px;
    transition: all 0.4s ease-in-out;
  }
  a.active {
    border: 2px solid #2291f1;
    color: #2291f1;
  }
  a:hover {
    border: 2px solid #2291f1;
    color: #fff;
    background: #2291f1;
  }
  @media only screen and (max-width: 688px) {
    a {
      display: block;
      margin: 10px;
    }
  }
`;
