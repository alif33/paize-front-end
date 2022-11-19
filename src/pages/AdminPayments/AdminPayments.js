import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { __getData } from "../../__lib__/helpers/HttpService";
import moment from "moment/moment";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import NeedsModal from "../NeedsModal/NeedsModal";
import { APP_URL } from "../../__lib__/helpers/HttpService";
const AdminPayments = () => {
  const [detailsData, setDetailsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState();
  const [payments, setPayments] = useState([]);
  const { users, admin } = useSelector((state) => state);

  useEffect(() => {
    __getData("admin/payments", admin?.auth?.token).then((res) => {
      if (res) {
        setPayments(res);
        setLoading(false);
      }
    });
  }, []);
  console.log("admin", admin.auth.token);
  console.log("detailsData", detailsData);
  return (
    <div>
      <Navbar />
      <Container>
        <Title>
          {" "}
          <h3>Payments History</h3>{" "}
        </Title>
        <TableContainer>
          {payments && payments.length > 0 && (
            <>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => {
                  return (
                    <tr key={index}>
                      <td>{payment?._id}</td>
                      <td>{moment(payment.createdAt).format("ll")}</td>
                      <td>{payment?.amount === 0 ? "PENDING" : "PAID"}</td>
                      <td> {payment.amount}</td>
                      <td
                        onClick={() => {
                          setModal(!modal);

                          setDetailsData(payment, index);
                        }}
                      >
                        {" "}
                        <IoIosCheckmarkCircle className="checkmark" />{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
          {payments && payments.length === 0 && <h1>You have no Data</h1>}

          {modal && (
            <AdminPaymentsModal>
              <div className="top-part" onClick={() => setModal(!modal)}></div>
              <div className="down-part">
                <div onClick={() => setModal(!modal)} className="x-icon">
                  {" "}
                  <p>Payment Information</p>
                  <button>
                    <IoIosCloseCircle />
                  </button>
                </div>

                <div className="school">
                  <p>{detailsData?.school?.schoolName}</p>
                  <p>{detailsData?.school?.schoolAddress}</p>
                </div>
                {/* {detailsData.needs.map((need) => (
                  <div>
                    <div className="model-header">
                      <img src={`${APP_URL}/${need?.itemImage}`} alt="" />
                    </div>
                  </div>
                ))} */}
              </div>
            </AdminPaymentsModal>
          )}
        </TableContainer>
      </Container>
    </div>
  );
};

export default AdminPayments;

const Container = styled.div``;

const Title = styled.div`
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 62px;
    color: #0e3746;
    margin-top: 10px;
    padding-left: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const TableContainer = styled.table`
  text-align: center;
  width: 100%;
  margin: auto;
  margin-bottom: 1rem;
  background-color: transparent;

  border-collapse: collapse;
  thead {
    background: rgba(34, 145, 241, 0.14);
  }
  thead th {
    background: rgba(34, 145, 241, 0.14);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #0e3746;
    padding: 10px 0;
  }
  tbody tr td {
    padding: 0.75rem;
    vertical-align: top;
    border-bottom: 1px solid #dee2e6;
  }

  .checkmark {
    font-size: 25px;
    color: green;
    cursor: pointer;
  }
  /* @media only screen and (max-width: 688px) {
    width: 200px;
  } */
`;

const AdminPaymentsModal = styled.div`
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
    left: 10%;
    top: 15%;
    width: 80%;
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
  }
  .x-icon {
    display: flex;
    justify-content: space-between;
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
  .model-header {
  }
  .model-header img {
    display: block;
    width: 150px;
    height: 150px;
  }
`;

const TableData = styled.div`
  /* margin-left: 1007px; */
  img {
    width: 40px;
    height: 40px;
  }
  .data {
    width: 100%;
  }
  .data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .data-header p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 39px;
    letter-spacing: 0em;

    color: #3d9ff3;
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
  }
`;
