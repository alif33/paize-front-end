import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { logedIn } from "../../store/users/actions";
import AlumniIcon from "../../svg/AlumniIcon";
import ContactIcon from "../../svg/ContactIcon/indes";
import LockIcon from "../../svg/LockIocn";
import MailIcon from "../../svg/MailIcon";
import MessageIcon from "../../svg/MessageIcon/MessageIcon";
import SchoolIcon2 from "../../svg/SchoolIcon2";
import UserIcon from "../../svg/UserIcon";
import { postData } from "../../__lib__/helpers/HttpService";

const ContactUs = () => {
  const [disable, setDisable] = useState(false);
  const [check, setCheck] = useState({
    student: false,
    author: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const onSubmit = (data) => {
    console.log(data);
    setDisable(true);
    postData(`/contact`, data)
      .then((res) => {
        console.log("contact-us", res);
        setDisable(false);
        if (res.success) {
          toast.success(`${res.message}`);
          reset();
        }
      })
      .catch((err) => {
        setDisable(false);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <h3>Contact Us</h3>
        <Toaster position="top-center" reverseOrder={false} />
        <From onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-from">
            <div className="inputsConatiner">
              <UserIcon />
              <div className={errors.name ? "inputDiv active" : "inputDiv "}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>Name is required</span>}
              </div>
            </div>
            <div className="inputsConatiner">
              <MailIcon />
              <div className={errors.email ? "inputDiv active" : "inputDiv "}>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email is required</span>}
              </div>
            </div>
            <div className="inputsConatiner">
              <ContactIcon />
              <div className={errors.phone ? "inputDiv active" : "inputDiv "}>
                <input
                  type="tel"
                  placeholder="phone"
                  {...register("phone", {})}
                />
                {errors.phone && <span>Phone is required</span>}
              </div>
            </div>
            <div className="inputsConatiner">
              <MessageIcon />
              <div className={errors.message ? "inputDiv active" : "inputDiv "}>
                <textarea
                  className="inputsTextarea"
                  type="textarea"
                  placeholder="Message"
                  {...register("message", {})}
                />
                {errors.message && <span>Message is required</span>}
              </div>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </From>
      </Container>
    </>
  );
};

export default ContactUs;
// const Container = styled.div`
//   h3 {
//     font-family: "Poppins";
//     font-style: normal;
//     text-transform: uppercase;
//     font-weight: 500;
//     font-size: 30px;
//     line-height: 42px;
//     color: #0e3746;
//     text-decoration: none;
//     text-align: center;
//     margin-right: 40px;
//     padding: 20px 0;
//   }
// `;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    color: #0e3746;
    text-decoration: none;
    text-align: center;
    margin-right: 40px;
    padding: 20px 0;
  }
  .inputsConatiner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
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
    border: 1px solid #2291f1;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
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
  .inputsTextarea {
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid #2291f1;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.76);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
  }
  .inputsTextarea.active textarea {
    border: 1px solid red;
    background: #fff;
  }
`;
const From = styled.form`
  width: 50%;
  height: 70%;
  margin: auto;
  .contact-from {
    display: grid;
  }

  @media only screen and (max-width: 688px) {
    width: 85%;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  cursor: pointer;

  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    color: rgba(14, 55, 70, 0.4);
    cursor: pointer;
  }
  .active label {
    color: #2291f1;
  }
  .danger label {
    color: #dc3545;
  }

  input {
    cursor: pointer;
    height: 22px;
    width: 22px;
  }
  svg {
    margin: 0 10px;
    width: 19px;
  }
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
  margin-top: 40px;
  cursor: pointer;
`;
const TextArae = styled.div`
  padding: 20px 0px;
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    padding: 10px 0px;
  }
  textarea {
    width: 100%;
    font-weight: 500;
    font-size: 17px;
    border: 1px solid rgba(218, 221, 225, 0.4);
    padding-top: 5px;
    padding-left: 10px;
  }
  textarea:focus {
    outline: none;
  }
`;
