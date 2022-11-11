import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/users/actions";
import { isEmptyObj } from "../../__lib__/helpers/Validator";
import UserIcon from "../../svg/UserIcon";
import MailIcon from "../../svg/MailIcon";
import LockIcon from "../../svg/LockIocn";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state);
  const { auth } = users;
  const { firstName, lastName, email, password, confirmPassword } = auth;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setAuth(data));
    navigate("/enroll/school-information");
  };

  // console.log(users);

  return (
    <Container>
      <From onSubmit={handleSubmit(onSubmit)}>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/user.png' className="ledtIcon" alt="" /> */}
          <UserIcon />
          <div className={errors.firstName ? "inputDiv active" : "inputDiv "}>
            <input
              {...register("firstName", {
                required: true,
              })}
              placeholder="First Name"
              // onChange={ e=>dispatch(setAuth(e)) }
              defaultValue={firstName}
            />
            {errors.firstName && <span>First Name is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          <UserIcon />
          <div className={errors.lastName ? "inputDiv active" : "inputDiv "}>
            <input
              // name="lastName"
              {...register("lastName", {
                required: true,
              })}
              placeholder="Last Name"
              // onChange={ e=>dispatch(setAuth(e)) }
              defaultValue={lastName}
            />
            {errors.lastName && <span>Last Name is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/mail.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    /> */}
          <MailIcon />
          <div className={errors.email ? "inputDiv active" : "inputDiv "}>
            <input
              // name="email"
              {...register("email", {
                required: true,
              })}
              placeholder="Email"
              // onChange={ e=>dispatch(setAuth(e)) }
              defaultValue={email}
            />
            {errors.email && <span>Email is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/lock.svg' style={{ width: "30px" }} className="ledtIcon" alt="" /> */}
          <LockIcon />
          <div className={errors.password ? "inputDiv active" : "inputDiv "}>
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
              placeholder="Password"
              // onChange={ e=>dispatch(setAuth(e)) }
              defaultValue={password}
            />
            {errors.password && <span>Password is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/lock.svg' style={{ width: "30px" }} className="ledtIcon" alt=""/> */}
          <LockIcon />
          <div
            className={errors.confirmPassword ? "inputDiv active" : "inputDiv "}
          >
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
              })}
              placeholder="Confirm Password "
              // onChange={ e=>dispatch(setAuth(e)) }
              defaultValue={confirmPassword}
            />
            {errors.confirmPassword && (
              <span>Confirm Password is required</span>
            )}
          </div>
        </div>

        <Button type="submit">Submit</Button>
        <Button2 type="button" onClick={() => navigate(-1)}>
          Back
        </Button2>
      </From>
    </Container>
  );
};

export default Register;

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
    border-radius: 3px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    border: 1px solid #2291f1;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.76);
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
  border-radius: 3px;
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
