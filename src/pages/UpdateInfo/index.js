import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import PersonalInfoForm from "../../components/PersonalInfoFrom";

const UpdateInfo = () => {
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  return (
    <>
      <Navbar />
      <Container>
        <Title>Settings</Title>

        <TapGroup>
          <Link to="/update-Information" className="active">
            Personal Information
          </Link>
          <Link to="/payment-details">Payment Details</Link>
        </TapGroup>

        <ProfileSction>
          <p>Your Avatar</p>
          <ProfileInfo>
            <UserImage src="/img/icon/dummy-profile.png" alt="" />
            <NameEmail>
              <h4>{__u__.info?.firstName}</h4>
              <p>{__u__.info?.email}</p>
            </NameEmail>
            <UpButton>
              Upload <input type="file" />{" "}
            </UpButton>
          </ProfileInfo>
        </ProfileSction>

        <PersonalInfoForm />
      </Container>
    </>
  );
};

export default UpdateInfo;

const Container = styled.div`
  margin: auto;
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
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
  padding-left: 40px;
`;

const TapGroup = styled.div`
  padding-left: 40px;
  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: rgba(14, 55, 70, 0.4);
    background: #ffffff;
    border: 2px solid rgba(14, 55, 70, 0.4);
    border-radius: 7px;
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

const ProfileSction = styled.div`
  padding-left: 40px;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 38px;
    color: rgba(14, 55, 70, 0.4);
    margin: 0;
    margin-top: 28px;
  }
  @media only screen and (max-width: 688px) {
    p {
      font-size: 12px;
    }
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
const UserImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  @media only screen and (max-width: 688px) {
    width: 40px;
    height: 40px;
  }
`;
const NameEmail = styled.div`
  margin: 0 20px;
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    color: #0e3746;
    margin: 0;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #2291f1;
    margin: 0;
    margin-top: 12px;
  }
  @media only screen and (max-width: 688px) {
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
    }
  }
`;
const UpButton = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  background: #2291f1;
  border-radius: 7px;
  color: #ffffff;
  width: 180px !important;
  padding: 5px 0;
  border: none;
  position: relative;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  @media only screen and (max-width: 688px) {
    font-size: 17px;
    width: 100px !important;
    padding: 3px 0;
  }
`;
