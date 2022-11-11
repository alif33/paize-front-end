import React from "react";
import styled from "styled-components";
import StartIcon from "../../svg/StartIcon";

const PaymentForm = () => {
  return (
    <From>
      <p>Card Number</p>
      <CardInputs>
        <img src="/img/icon/uim_master-card.png" alt="" />

        <input type="text" />
        <span>-</span>
        <input type="text" />
        <span>-</span>
        <input type="text" />
        <span>-</span>
        <input type="text" />

        {/* <img src="/img/icon/start.svg" alt="" /> */}
        <StartIcon />
      </CardInputs>

      <NumberCard>
        <NumberLable>
          <p>CVV Number</p>
          <span className="span-text">
            Enter the 3 or 4 digit number on the card
          </span>
        </NumberLable>
        <CardInput>
          <Input type="text" />
          <img src="/img/icon/dote-icon.png" alt="" />
        </CardInput>
      </NumberCard>

      <NumberCard>
        <NumberLable>
          <p>CVV Number</p>
          <span className="span-text">
            Enter the 3 or 4 digit number on the card
          </span>
        </NumberLable>
        <CardInputDate>
          <Input type="text" />
        </CardInputDate>
        <span>/</span>
        <CardInputDate>
          <Input type="text" />
        </CardInputDate>
      </NumberCard>
      <Button>Pay Now</Button>
    </From>
  );
};

export default PaymentForm;

const From = styled.form`
  width: 100%;
  margin: auto;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;
    color: #0e3746;
    margin: 0;
    margin-top: 0px;
    margin-bottom: 10px;
    @media only screen and (max-width: 688px) {
      width: 98%;
    }
  }
`;
const CardInputs = styled.div`
  background: rgba(218, 221, 225, 0.4);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;

  input {
    width: 68px;
    font-size: 20px;
    border: none;
    background: transparent;
  }
  @media only screen and (max-width: 688px) {
    padding-left: 5px;
    padding-right: 5px;
    input {
      width: 100%;
    }
  }
`;
const NumberCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;
const NumberLable = styled.div`
  p {
    margin: 0;
    line-height: 22px;
  }
  span {
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;

    color: rgba(14, 55, 70, 0.4);
  }
  @media only screen and (max-width: 688px) {
    p {
      font-size: 14px;
    }
    .span-text {
      font-size: 10px;
      display: inline-block;
      line-height: 12px;
    }
  }
`;
const Input = styled.input`
  background: rgba(218, 221, 225, 0.4);
  border-radius: 5px;
`;
const CardInput = styled(CardInputs)`
  padding: 10px 14px;
  input {
    width: 210px;
    margin-right: 20px;
    :focus {
      outline: none;
    }
  }
  @media only screen and (max-width: 688px) {
    width: 250px;
  }
`;
const CardInputDate = styled(CardInput)`
  input {
    width: 100px;
  }
  @media only screen and (max-width: 688px) {
    width: 120px;
  }
`;
const Button = styled.button`
  background: #2291f1;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  width: 100%;
  border: none;
  margin-top: 42px;
  padding: 16px 0;
`;
