import React from "react";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";
import { IoIosCloseCircle } from "react-icons/io";
const ItemModal = ({ itemData, setItemData, setModal, modal }) => {
  console.log("itemData", itemData);
  return (
    <Container>
      {/* <div className="top-part"></div> */}

      <div className="down-part">
        <div onClick={() => setModal(!modal)} className="x-icon">
          {" "}
          <button>
            <IoIosCloseCircle />
          </button>
        </div>

        <div className="modal-photo">
          <div>
            <img src={`${APP_URL}/${itemData.itemImage}`} alt="" />
            <p className="img-text">Item: {itemData?.itemName}</p>
          </div>
          <div>
            <img src={`${APP_URL}/${itemData.studentImage}`} alt="" />

            <p className="img-text">Student: {itemData?.studentName}</p>
          </div>
        </div>

        <div className="item-card">
          <p className="item-card-text">
            Payment:{" "}
            <span
              className={
                itemData?.status === "UNPAID"
                  ? "payment-unpaid"
                  : "payment-paid"
              }
            >
              {itemData.status}
            </span>
          </p>
        </div>
        <p className="item-description">
          <span>Description: </span>
          {itemData.description}
        </p>

        {/* <p>Item Name: {itemData.itemName}</p>
        <p>Cost: {itemData.cost}</p>
        <p>Student Name: {itemData.studentName}</p>
        <p>Description:{itemData.description}</p>
        <p>Status: {itemData.status}</p>

        <p>fffffffffffffffffff</p> */}
      </div>
      <div className="badge">
        <p className="item-card-text">Cost: {itemData.cost}$</p>
      </div>
    </Container>
  );
};

export default ItemModal;

const Container = styled.div`
  img {
    width: 240px;
    height: 240px;
    border-radius: 7px;
  }
  .modal-photo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
  }
  .top-part {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: #e0e0eb;
    opacity: 0.5;
  }
  .down-part {
    position: absolute;
    left: 26%;
    top: 7%;
    width: 700px;
    height: 550px;
    /* background-color: rgb(255 255 255 / var(--tw-bg-opacity)); */
    background-color: white;
    padding-top: 3rem /* 32px */;
    padding-bottom: 0.5rem /* 32px */;
    padding-left: 1.5rem /* 28px */;
    padding-right: 1.5rem /* 28px */;
    border-radius: 20px;
    overflow-y: scroll;
    box-shadow: 0px 0px 38px 0px rgba(56, 148, 212, 0.78);
    -webkit-box-shadow: 0px 0px 38px 0px rgba(56, 148, 212, 0.78);
    -moz-box-shadow: 0px 0px 38px 0px rgba(56, 148, 212, 0.78);
    font-family: "Roboto", sans-serif;
    ::-webkit-scrollbar {
      width: 9px;
      height: 9px;
    }
    ::-webkit-scrollbar-button {
      width: 15px;
      height: 19px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 33px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #e1e1e1;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #a39e9e;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 34px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #666666;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
  .item-data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-text {
    font-size: 16px;
  }
  .item-description {
    text-align: justify;
    line-height: 1.8em;
  }
  .item-description span {
    font-weight: 700;
  }
  .item-card {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .item-card-text {
    font-size: 18px;
  }
  .payment-unpaid {
    color: red;
  }
  .payment-paid {
    color: green;
  }
  .x-icon {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .x-icon button {
    border: 0;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
    position: fixed;
    margin-top: -30px;
  }
  .x-icon button:hover {
    color: #33adff;
  }
  .badge {
    position: fixed;
    top: 5%;
    left: 25%;
  }
  .badge p {
    border: 2 px;
    background-color: #2291f1;
    border-radius: 15px;
    color: #ffffff;
    width: 140px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 47px 0px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 47px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 47px 0px rgba(255, 255, 255, 0.75);
  }
`;
