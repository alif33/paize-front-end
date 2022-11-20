import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCache, logedIn } from "../../store/users/actions";
import { postData } from "../../__lib__/helpers/HttpService";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import BankIcon from "../../svg/BankIcon";
import UserIcon from "../../svg/UserIcon";
import DocumentIcon from "../../svg/DocumentIcon";

const PaymentInfo = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }, 
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const { auth, schoolInfo, paymentInfo } = users;
  const { bankName, routingNumber, accountName, accountNumber } = paymentInfo;

  const onSubmit = (data) => {
    setDisable(true);
    postData("/enroll", { ...auth, ...schoolInfo, ...data })
      .then((res) => {
        setDisable(false);
        if (res.success) {
          const { token, info, role, status } = res;
          dispatch(clearCache());
          dispatch(logedIn({ token, info, role, status }));
          navigate("/registered");
        } else {
          const { response } = res;
          toast.error(`${response.data.message}`);
        }
      })
      .catch((err) => {
        setDisable(false);
      });
  };

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <From onSubmit={handleSubmit(onSubmit)}>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
                    /> */}
          <BankIcon />
          <div className={errors.bankName ? "inputDiv active" : "inputDiv "}>
            <input
              {...register("bankName", {
                required: true,
              })}
              placeholder="Name of Bank"
              defaultValue={bankName}
            />
            {errors.bankName && <span>Bank Name is required</span>}
          </div>
        </div>

        <div className="inputsConatiner">
          {/* <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
          /> */}
          <BankIcon />
          <div
            className={errors.routingNumber ? "inputDiv active" : "inputDiv "}
          >
            <input
              // name="routingNumber"
              {...register("routingNumber", {
                required: true,
              })}
              placeholder="Routing Number"
              defaultValue={routingNumber}
              // onChange={ e=>dispatch(setPaymentInfo(e)) }
            />
            {errors.routingNumber && <span>Routing Number is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/user.svg' className="ledtIcon" alt=""
          /> */}
          <UserIcon />
          <div className={errors.accountName ? "inputDiv active" : "inputDiv "}>
            <input
              {...register("accountName", {
                required: true,
              })}
              placeholder="Name of Account"
              defaultValue={accountName}
            />
            {errors.accountName && <span>Account Name is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/document.svg' className="ledtIcon" alt=""
          /> */}
          <DocumentIcon />
          <div
            className={errors.accountNumber ? "inputDiv active" : "inputDiv "}
          >
            <input
              // name="accountNumber"
              {...register("accountNumber", {
                required: true,
              })}
              placeholder="Account Number"
              defaultValue={accountNumber}
              // onChange={ e=>dispatch(setPaymentInfo(e)) }
            />
            {errors.accountNumber && <span>Account Number is required</span>}
          </div>
        </div>

        <Button type="submit" disabled={disable}>
          Submit
        </Button>
        <Button2 type="button" onClick={() => navigate(-1)}>
          Back
        </Button2>
      </From>
    </Container>
  );
};

export default PaymentInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .inputsConatiner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  .inputsConatiner span {
    color: red;
    position: absolute;
    bottom: -12px;
    left: 22px;
    background: #fff;
    padding: 0 6px;
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }

  .inputDiv {
    width: 88%;
    position: relative;
  }

  .inputDiv input {
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.76);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    border-radius: 3px;
    border: 1px solid #2291f1;
    width: 100%;
    box-sizing: border-box;
  }
  .inputDiv.active input {
    border: 1px solid red;
    background: #fff;
  }
  .inputDiv input:focus {
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }
  @media only screen and (max-width: 688px) {
    width: 100%;
  }
`;

const From = styled.form`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const Button = styled.button`
  width: 100%;
  background: #2291f1;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 39px;
  color: #ffffff;
  border: none;
  margin: 10px 0;
  padding: 5px 0;
`;
const Button2 = styled(Button)`
  background: #fff;
  color: #2291f1;
  border: 2px solid #2291f1;
`;
