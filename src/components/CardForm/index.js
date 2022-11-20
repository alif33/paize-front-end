import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logedIn } from "../../store/users/actions";
import BankIcon from "../../svg/BankIcon";
import ContactIcon from "../../svg/ContactIcon/indes";
import MailIcon from "../../svg/MailIcon";
import SchoolIcon from "../../svg/SchoolIcon";
import StartIcon from "../../svg/StartIcon";
import UserIcon from "../../svg/UserIcon";
import { updateData } from "../../__lib__/helpers/HttpService";
import DocumentIcon from "../../svg/DocumentIcon";
const CardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  console.log("users", __u__.info.routingNumber);
  const onSubmit = (data) => {
    setDisable(true);

    console.log("data", data);
    updateData(`/author/profile`, data, __u__.token)
      .then((res) => {
        console.log("update-data", res);
        setDisable(false);
        if (res.success) {
          toast.success(`${res.message}`);
          const { token, info, role, status } = res;

          dispatch(
            logedIn({
              token,
              info,
              role,
              status,
            })
          );
        }
      })
      .catch((err) => {
        setDisable(false);
      });
  };
  return (
    <From onSubmit={handleSubmit(onSubmit)}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="row">
        <div className="inputsConatiner">
          {/* <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    /> */}
          <div className="icon">
            <BankIcon />
          </div>
          <div className={errors.firstName ? "inputDiv active" : "inputDiv "}>
            <input
              {...register("bankName", {
                required: true,
              })}
              placeholder="Name of Bank"
              defaultValue={__u__?.info?.bankName}
            />
            {errors.firstName && <span>First Name is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          <div className="icon">
            <BankIcon />
          </div>
          <div className={errors.lastName ? "inputDiv active" : "inputDiv "}>
            <input
              type="number"
              {...register("routingNumber", {
                required: true,
              })}
              placeholder="Routing Number"
              defaultValue={__u__?.info?.routingNumber}
            />
            {errors.lastName && <span>Last Name is required</span>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="inputsConatiner">
          <div style={{ marginLeft: "20px" }} className="icon">
            <UserIcon />
          </div>
          <div className="inputDiv">
            <input
              {...register("accountName", {
                required: true,
              })}
              placeholder="Name of Account"
              defaultValue={__u__?.info?.accountName}
            />
          </div>
        </div>
        <div className="inputsConatiner">
          <div className="icon">
            <DocumentIcon />
          </div>
          <div className={errors.phoneNumber ? "inputDiv active" : "inputDiv "}>
            <input
              // name="accountNumber"
              type="number"
              {...register("accountNumber", {
                required: true,
              })}
              placeholder="Account Number"
              defaultValue={__u__?.info?.accountNumber}
            />
            {errors.phoneNumber && <span>Phone Number is required</span>}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button disabled={disable}>Update</Button>
      </div>
    </From>
  );
};

export default CardForm;

const From = styled.form`
  margin-top: 49px;
  padding-top: 36px;
  .row {
    display: grid;
    grid-template-columns: 48% 48%;
    column-gap: 4%;
  }
  .icon {
    margin-left: 30px;
  }
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

  .inputDiv {
    width: 88%;
    position: relative;
  }

  .inputDiv input {
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid #2291f1;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.76);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding-left: 20px;
    padding: 5px;

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
    .row {
      display: grid;
      grid-template-columns: 90%;
      column-gap: 10%;
    }
    .icon {
      margin-right: 20px;
    }
  }
  @media only screen and (min-width: 688px) and (max-width: 992px) {
    .icon {
      margin-right: 20px;
    }
  }
`;

const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  background: #2291f1;
  border-radius: 7px;
  color: #ffffff;
  padding: 5px 0;
  border: none;
  width: 25% !important;
  margin: auto;
  margin-top: 30px;
  cursor: pointer;
`;
