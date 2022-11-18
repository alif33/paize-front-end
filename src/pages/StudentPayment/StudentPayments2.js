import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { __getData } from "../../__lib__/helpers/HttpService";

const StudentPayments2 = () => {
  const [detailsData, setDetailsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  const [payments, setPayments] = useState([]);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  useEffect(() => {
    __getData("student/payments", __u__.token).then((res) => {
      if (res) {
        setPayments(res);
        setLoading(false);
      }
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <table class="demo">
          <thead>
            <tr>
              <th id="th">DATE</th>
              <th id="th">STATUS</th>
              <th id="th">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <>
                <tr className="">
                  <td>#88698</td>
                  <td>PENDING</td>
                  <td
                    onClick={() => setOpen(open === index ? -1 : index)}
                    style={{ cursor: "pointer" }}
                    className=""
                  >
                    {payment.amount}
                    <span className="">
                      {open === index && <IoMdArrowDropup />}
                      {open !== index && <IoMdArrowDropdown />}
                    </span>
                  </td>
                </tr>
                {open === index && (
                  <>
                    <ul className="" style={{ display: "flex" }}>
                      <li>Item Name</li>
                      <li>Per Cost</li>
                    </ul>
                    <ul style={{ display: "flex" }}>
                      <li>Test</li>
                      <li>next</li>
                    </ul>
                  </>
                )}
              </>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default StudentPayments2;
const Container = styled.div`
  .demo {
    width: 100%;
    /* border: 1px solid #c0c0c0; */
    border-collapse: collapse;
    border: none;
    padding: 5px;
  }
  .demo th {
    /* border: 1px solid #c0c0c0; */
    border: none;
    padding: 5px;
    background: #8da5dd;
  }
  .demo td {
    /* border: 1px solid #c0c0c0; */
    border: none;
    padding: 5px;
    text-align: center;
  }
`;
