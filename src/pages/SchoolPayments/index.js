import React, { useEffect, CSSProperties } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { __getData } from "../../__lib__/helpers/HttpService";
import AdminPaymentsModal from "../AdminPayments/AdminPaymentsModal";
import { DotLoader } from "react-spinners";
import moment from "moment";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const SchoolPayment = () => {
  const [navLink, setNavLink] = useState("all");
  const [students, setStudents] = useState();
  const [studentsData, setStudentsData] = useState();
  const [detailsData, setDetailsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  const [modal, setModal] = useState(false);
  const [payments, setPayments] = useState([]);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

    useEffect(() => {
      __getData("/school/payments", __u__.token).then((res) => {
        if (res) {
          // console.log(res, "OKAY");
          setPayments(res.reverse());
          setLoading(false);
        }
      });
    }, []);

  // console.log(payments);
  return (
    <div>
      <Navbar />
      <Container>
        <Title>
          {" "}
          <h3>Payments History</h3>{" "}
        </Title>
        <TableNavList>
          <li
            onClick={() => setNavLink("all")}
            className={navLink === "all" ? "active" : "all"}
          >
            All
          </li>
          <li
            onClick={() => setNavLink("pending")}
            className={navLink === "pending" ? "active" : "all"}
          >
            Pending
          </li>
        </TableNavList>
        <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />
        <TableContainer>
          {payments && payments.length > 0 && (
            <>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => {
                  return (
                    <tr key={index}>
                      <td
                        onClick={() => {
                          setModal(!modal);
                          setDetailsData(payment, index);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {payment?._id}
                      </td>
                      <td
                        onClick={() => {
                          setModal(!modal);
                          setDetailsData(payment, index);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {moment(payment.createdAt).format("ll")}
                      </td>
                      <td>{payment?.amount === 0 ? "PENDING" : "PAID"}</td>
                      <td> {payment.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
          { !loading && payments && payments.length === 0 && <h1>You have no payments history.</h1> }

          {modal && (
            <AdminPaymentsModal
              setModal={setModal}
              modal={modal}
              detailsData={detailsData}
              setDetailsData={setDetailsData}
            />
          )}
        </TableContainer>
      </Container>
    </div>
  );
};

export default SchoolPayment;

const Container = styled.div`
  .data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: rgba(34, 145, 241, 0.14);
    text-align: left;

    //styleName: Heading 5;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #0e3746;
    padding-left: 50px;
    padding-right: 50px;
  }
  .data-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family: Poppins;
    font-size: 16px!;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  /* .position {
    width: 400px;
    text-align: right;
  } */
  .ml-33 {
    width: 33%;
    text-align: left;
  }
  .ml-34 {
    width: 34%;
    text-align: right;
  }
`;
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
    width: 20%;
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

const TableData = styled.div`
  /* margin-left: 1007px; */

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
    font-size: 16px;
    font-weight: 600;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
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
const TableNavList = styled.ul`
  margin-top: 10px;
  margin-left: 40px;
  li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: rgba(14, 55, 70, 0.4);
    border-right: 2px solid rgba(14, 55, 70, 0.4);
    display: inline-block;
    margin-right: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  li:last-child {
    border-right: none;
  }
  li.active {
    color: #2291f1;
  }
`;
