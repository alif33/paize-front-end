import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { __getData } from "../../__lib__/helpers/HttpService";
const StudentPayment = () => {
  const [detailsData, setDetailsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  const [payments, setPayments] = useState([]);
  const { users } = useSelector(state=>state);
  const { __u__ } = users;

  useEffect(()=>{
    __getData("student/payments", __u__.token)
      .then(res=>{
        if(res){
          setPayments(res);
          setLoading(false);
        }
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Container>
        <Title>
          {" "}
          <h3>Payments History</h3>{" "}
        </Title>

        <div>
          <div className="data-header">
            <p className="">DATE</p>
            <p className="ml">STATUS</p>
            <p className="ml-2">TOTAL</p>
          </div>
          { !loading && payments.map((payment, index)=>(
            <>
            <div className="data-main">
              <p>#88698</p>
              <p>PENDING</p>
              <p
                onClick={() => setOpen(open===index? -1: index)}
                style={{ cursor: "pointer" }}
                className="table-end"
              >
                { payment.amount }
                <span className="table-end-icon">
                  {open===index && <IoMdArrowDropup />}
                  {open!==index && <IoMdArrowDropdown />}
                </span>
              </p>
            </div>
            {open===index && (
              <TableData>
                <div className="data">
                  <div className="data-header">
                    <p>Item Name</p>
                    <p>Per Cost</p>
                  </div>
                  <div className="data-main">
                    <p>Member ship</p>
                    <p>$1000</p>
                  </div>
                  <div className="data-main">
                    <p>Member ship</p>
                    <p>$300</p>
                  </div>
                </div>
              </TableData>
            )}
          </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StudentPayment;

const Container = styled.div`
  .data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: rgba(34, 145, 241, 0.14);
    text-align: left;
    gap: 100px;
    //styleName: Heading 5;
    font-family: Poppins;
    font-size: 20px;
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
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .ml {
    width: 160px;
  }
  .ml-2 {
    width: 100px;
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
    font-size: 20px;
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
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #8b8b8b;
  }
`;

{
  /* <TableData>
<div className="data">
  <div className="data-header">
    <p>Item Name</p>
    <p>Per Cost</p>
  </div>
  <div className="data-main">
    <p>Member ship</p>
    <p>$1000</p>
  </div>
  <div className="data-main">
    <p>Member ship</p>
    <p>$300</p>
  </div>
</div>
</TableData> */
}
