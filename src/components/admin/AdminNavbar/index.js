import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../../store/admins/actions";
import UserDropDown from "./UserDropDown";
import { LOGO } from "../../../__lib__/config";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state);
  const { auth } = admin;

  const handleLogout = () => {
    dispatch(LogOut()); 
    navigate("/");
  };

  return (
    <Container>
      <Nav>
        <NavBrand>
          <Link to="/">
            <img
              src={LOGO}
              style={{ width: "100px", height: "60px" }}
              alt=""
            />
          </Link>
        </NavBrand>
        <SearchDiv>
          <img src="/img/icon/search-icon.svg" alt="" />{" "}
          <SearchInput placeholder="Search" />
        </SearchDiv>
        <div className="loginAndIconDiv">
          <div className="buttonContainer">
            <UserDropDown />
          </div>
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #dadde1;
  .loginAndIconDiv {
    display: flex;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .heading {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;
    color: #0e3746;
    text-decoration: none;
    margin-right: 40px;
  }
`;

const LoginBtn = styled.button`
  background: #2291f1;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
  border: 1px solid #2291f1;
  transition: all 0.4s ease-in-out;
  padding: 5px 25px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    color: #2291f1;
    background: #fff;
  }
`;
const Nav = styled.nav`
  height: 100%;
  width: 96%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;
const NavBrand = styled.div``;
const SearchInput = styled.input`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: #111;
  :placeholder {
    color: #0e3746;
  }
  :focus {
    outline: none;
  }
`;
const SearchDiv = styled.div`
  margin-left: 110px;
  width: 42%;
  height: 50px;
  display: flex;
  align-items: center;
  background: rgba(218, 221, 225, 0.4);
  border: 1px solid #dadde1;
  border-radius: 11px;
  img {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-right: 6px;
    border-radius: 20px;
  }
`;
