import React from "react";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";
import { IoIosCloseCircle } from "react-icons/io";

const AdminPaymentsModal = (
  setNeedData,
  setItemData,
  itemData,
  needData,
  setModal,
  modal
) => {
  return (
    <Container>
      {/* <div className="top-part"></div> */}

      <TableContainer>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Item Name</th>
                      <th>Item Image</th>
                      <th>Student</th>
                      <th>Student Image</th>
                      <th>School</th>
                      <th>Bank</th>
                      <th>Per Cost</th>
                    </tr>
                  </thead>
                  {detailsData.needs.map((need) => (
                    <tbody>
                      <tr>
                        {" "}
                        <td>{need?._id}</td>
                        <td>{need?.itemName}</td>
                        <td>
                          <img src={need?.itemImage} alt="" />
                        </td>
                        <td>{need?.studentName}</td>
                        <td>
                          <img src={need?.studentImage} alt="" />
                        </td>
                        <td>{detailsData?.school?.schoolName}</td>
                        <td>{detailsData?.school?.bankName}</td>
                        <td>${need?.cost}</td>
                      </tr>
                    </tbody>
                  ))}
                </TableContainer>
    </Container>
  );
};

export default AdminPaymentsModal;
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

    padding-bottom: 0.5rem /* 32px */;
    padding-left: 1.5rem /* 28px */;
    padding-right: 1.5rem /* 28px */;
    border-radius: 20px;
    overflow-y: scroll;
    box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
    -moz-box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
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
    font-size: 20px;
    font-weight: 600;
  }
  .item-description {
    text-align: justify;
    line-height: 1.8em;
    padding: 15px;
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
    position: absolute;
    margin-top: -30px;
  }
  .x-icon button:hover {
    color: #33adff;
  }
  .badge {
    /* position: absolute;
    top: 5%;
    left: 25%; */

    margin-top: 20px;
    margin-bottom: 20px;
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
  .border-b {
    border-bottom: 1px solid #85878b;
  }
`;
