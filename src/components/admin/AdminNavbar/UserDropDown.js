import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "../../../store/admins/actions";
import MessageIcon from "../../../svg/MessageIcon/MessageIcon";
import MessageFill from "../../../svg/MessageFill";
import PaymentBtn from "../../../svg/PaymentBtn";

const UserDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
    navigate("/");
  };

  return (
    <Popup
      trigger={
        <Button>
          {" "}
          <img
            className="user-icon"
            src="/img/icon/dummy-profile.png"
            alt=""
          />{" "}
          <img className="down-icon" src="/img/icon/drop-down.svg" alt="" />
        </Button>
      }
      position="bottom right "
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      {(close) => (
        <DropDownMenu onClick={close}>
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="menu-item"
          >
            {" "}
            <img src="/img/icon/settings.svg" alt="" /> DashBoard
          </div>
          <div
            onClick={() => navigate("/admin/payments")}
            className="menu-item"
          >
            {" "}
            <PaymentBtn /> &nbsp; Payments
          </div>
          <div
            onClick={() => navigate("/admin/contact-us")}
            className="menu-item"
          >
            {" "}
            <MessageFill /> &nbsp; Inbox
          </div>
          <div onClick={handleLogout} className="menu-item">
            {" "}
            <img src="/img/icon/log-out.svg" alt="" /> Logout
          </div>
        </DropDownMenu>
      )}
    </Popup>
  );
};

export default UserDropDown;

const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75px;
  cursor: pointer;
  .user-icon {
    border-radius: 50%;
    height: 45px;
    width: 45px;
  }
  .down-icon {
    height: 14px;
    width: 14px;
  }
`;

const DropDownMenu = styled.div`
  background: #ffffff;
  border: 1px solid #dadde1;
  border-radius: 5px;
  text-align: center;
  .menu-item {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0e3746;
    border-bottom: 1px solid #dadde1;
    padding: 15px 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .menu-item:last-child {
    border-bottom: none;
  }

  img {
    margin-right: 10px;
  }
`;
