import React from "react";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";
import { IoIosCloseCircle } from "react-icons/io";
import MapPin from "../../svg/MapPin/MapPin";
import BankIcon from "../../svg/BankIcon";
import { LOGO } from "../../__lib__/config";

const AdminPaymentsModal = ({ setModal, modal, detailsData }) => {
  console.log("AdminPaymentsModal", detailsData);
  return (
    <Container>
      <div className="top-part" onClick={() => setModal(!modal)}></div>
      <div className="down-part">
        <div onClick={() => setModal(!modal)} className="x-icon">
          {" "}
          <button>
            <IoIosCloseCircle />
          </button>
        </div>
        <div>
          <p
            style={{
              fontSize: "30px",

              marginBottom: "20px",
            }}
            id="modal-header"
          >
            Informations of School & Student
          </p>
        </div>
        <div className="modal-main">
          <div className="modal-main-1">
            <h4>School Info</h4>{" "}
            <div className="bg-rounded">
              <img
                className="modal-main-img "
                src={LOGO}
                alt=""
                srcset=""
              />
            </div>
            <p className="modal-main-name">{detailsData?.school?.schoolName}</p>
            <div className="border-b"></div>
            <p className="modal-flex">
              <MapPin />{" "}
              <span style={{ width: "80px" }} className="span-color">
                &nbsp; Address:
              </span>
              &nbsp; {detailsData?.school?.schoolAddress}
            </p>
            <p className="modal-flex">
              <img
                src="/img/icon/mail.svg"
                style={{ width: "19px", height: "17px", marginRight: "2px" }}
                alt=""
                srcset=""
              />{" "}
              <span style={{ width: "80px" }} className="span-color">
                &nbsp;Email:
              </span>
              &nbsp; {detailsData?.school?.email}
            </p>
            <p className="modal-flex">
              <img
                src="/img/icon/Phone.png"
                style={{ width: "18px", height: "15px" }}
                alt=""
                srcset=""
              />
              <span style={{ width: "80px" }} className="span-color">
                &nbsp; Phone:
              </span>
              &nbsp; {detailsData?.school?.phoneNumber}
            </p>
            <div className="modal-flex-main">
              <div className="modal-flex">
                <img
                  src="/img/icon/Bank.png"
                  style={{ width: "20px", height: "15px" }}
                  alt=""
                  srcset=""
                />{" "}
                <span style={{ width: "90px" }} className="span-color">
                  &nbsp; Bank Info:
                </span>
              </div>
              <p>
                &nbsp; {detailsData?.school?.bankName},<br />
                <span>Routing Number</span> {detailsData?.school?.routingNumber}
              </p>
            </div>
          </div>
          <div className="modal-main-2">
            {" "}
            <h4>Student</h4>
            <div className="bg-rounded">
              {" "}
              <img
                className="modal-main-img"
                src={detailsData?.school?.image}
                alt=""
                srcset=""
              />
            </div>
            <p className="modal-main-name">
              {detailsData?.student?.firstName} {detailsData?.student?.lastName}
            </p>
            <div className="border-b"></div>
            <p className="modal-flex">
              <MapPin />{" "}
              <span style={{ width: "80px" }} className="span-color">
                &nbsp; Address:
              </span>
              &nbsp; {detailsData?.school?.schoolAddress}
            </p>
            <p className="modal-flex">
              <img
                src="/img/icon/mail.svg"
                style={{ width: "19px", height: "17px", marginRight: "2px" }}
                alt=""
                srcset=""
              />{" "}
              <span style={{ width: "80px" }} className="span-color">
                &nbsp;Email:
              </span>
              &nbsp; {detailsData?.student?.email}
            </p>
            <p className="modal-flex">
              <img
                src="/img/icon/Phone.png"
                style={{ width: "18px", height: "15px" }}
                alt=""
                srcset=""
              />
              <span style={{ width: "80px" }} className="span-color">
                &nbsp; Phone:
              </span>
              &nbsp; {detailsData?.student?.phoneNumber}
            </p>
            <div className="modal-flex-main">
              <div className="modal-flex">
                <img
                  src="/img/icon/Student.png"
                  style={{ width: "20px", height: "15px", marginRight: "8px" }}
                  alt=""
                  srcset=""
                />
                <p style={{ width: "160px" }} className="span-color">
                  {" "}
                  Studentship Status:
                </p>
              </div>
              <p>
                &nbsp; {detailsData?.school?.bankName},
                {detailsData?.school?.routingNumber}
              </p>
            </div>
          </div>
        </div>
        <TableData>
          <div className="data">
            <div className="data-header">
              <p className="ml-33">Item Name</p>

              <p className="ml-34">Per Cost</p>
            </div>
            {detailsData.needs.map((need) => (
              <div className="data-main">
                <p className="ml-33">{need?.itemName}</p>

                <p className="ml-34">${need?.cost}</p>
              </div>
            ))}
          </div>
        </TableData>
        {/* {detailsData.needs.map((need) => (
                  <div>
                    <div className="model-header">
                      <img src={`${APP_URL}/${need?.itemImage}`} alt="" />
                    </div>
                  </div>
                ))} */}
      </div>
    </Container>
  );
};

export default AdminPaymentsModal;
const Container = styled.div`
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
    left: 12%;
    top: 6%;
    width: 78%;
    height: 600px;
    background-color: white;
    padding-top: 1rem /* 32px */;
    padding-bottom: 1rem /* 32px */;
    padding-left: 0.5rem /* 28px */;
    padding-right: 0.5rem /* 28px */;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
    -moz-box-shadow: 0px 0px 15px 0px rgba(56, 148, 212, 0.78);
    font-family: "Roboto", sans-serif;
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

  .x-icon {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .x-icon p {
    font-size: 20px;
  }
  .x-icon button {
    border: 0;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
  }

  .x-icon button:hover {
    color: #33adff;
  }
  #model-header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 41px;
    line-height: 62px;
    color: #0e3746;
    text-align: center;
    padding-top: 20px;
  }

  .modal-main {
    display: flex;
    justify-content: space-between;

    padding-left: 40px;
    padding-right: 40px;
  }
  .modal-main-1 {
    width: 500px;
    text-align: left;
  }
  .modal-main h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 48px;
    text-transform: uppercase;

    color: #2291f1;
  }
  .modal-main-img {
    width: 145px;
    height: 145px;
    border-radius: 50%;
  }
  .bg-rounded {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    background: rgba(34, 145, 241, 0.14);
    border-radius: 50%;
  }
  .modal-main-2 {
    width: 500px;
    text-align: left;
  }
  .modal-main-name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;
    color: #000000;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .modal-flex-main {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .modal-flex {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .modal-flex p {
  }
  .span-color {
    color: #969393;
  }
  .border-b {
    border-bottom: 1px solid #85878b;
    margin-bottom: 20px;
  }
`;
const TableData = styled.div`
  /* margin-left: 1007px; */
  img {
    width: 40px;
    height: 40px;
  }
  .data {
    width: 97%;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(34, 145, 241, 0.14);
  }
  .data-header p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 39px;
    color: #3d9ff3;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .data-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #8b8b8b;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
