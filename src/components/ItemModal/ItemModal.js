import React from "react";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";
const ItemModal = ({ itemData, setItemData, setModal, modal }) => {
  console.log("itemData", itemData);
  return (
    <Container>
      <div onClick={() => setModal(!modal)} className="top-part"></div>
      <div className="down-part">
        <div className="modal-photo">
          <div>
            <img src={`${APP_URL}/${itemData.itemImage}`} alt="" />
            <p className="img-text">{itemData?.itemName}</p>
          </div>
          <div>
            <img src={`${APP_URL}/${itemData.studentImage}`} alt="" />

            <p className="img-text">{itemData?.studentName}</p>
          </div>
        </div>
        <div className="item-card">
          <p className="item-card-text">Cost: {itemData.cost}$</p>
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
        <p className="item-description">{itemData.description}</p>

        {/* <p>Item Name: {itemData.itemName}</p>
        <p>Cost: {itemData.cost}</p>
        <p>Student Name: {itemData.studentName}</p>
        <p>Description:{itemData.description}</p>
        <p>Status: {itemData.status}</p>

        <p>fffffffffffffffffff</p> */}
      </div>
    </Container>
  );
};

export default ItemModal;

const Container = styled.div`
  img {
    width: 200px;
    height: 200px;
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
    background-color: #11111185;
  }
  .down-part {
    position: fixed;
    left: 26%;
    top: 7%;
    width: 700px;
    height: 600px;
    /* background-color: rgb(255 255 255 / var(--tw-bg-opacity)); */
    background-color: white;
    padding-top: 2rem /* 32px */;
    padding-bottom: 2rem /* 32px */;
    padding-left: 1.75rem /* 28px */;
    padding-right: 1.75rem /* 28px */;
    border-radius: 20px;
    overflow-y: scroll;
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
    line-height: 2em;
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
`;
