import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { __getData } from "../../__lib__/helpers/HttpService";
import { useDispatch, useSelector } from "react-redux";
const Receipt = () => {
  const { _id } = useParams();
  const [paymentsData, setPaymentsData] = useState();
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { __u__ } = users;

  useEffect(() => {
    console.log("id", _id);
    __getData(`/payment?_id=${_id}`, __u__.token).then((res) => {
      console.log(res);
    });
  }, []);
  const handlePrint = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        unit: "px",
        format: [700, 550],
      });

      pdf.addImage(imgData, "JPEG", 50, 50);
      // pdf.output('dataurlnewwindow');
      pdf.save("receipt.pdf");
    });
  };
  console.log(__u__);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="invoice-top">
          <div id="divToPrint" className="invoice">
            <div className="invoice-data">
              <h5>Receipt</h5>
              <p>#dsfhisfc506160</p>
            </div>
            {/* <div className="invoice-header">
            <h3>Invoice</h3>
            <img
              src="/img/icon/logo.svg"
              style={{ width: "90px", height: "50px" }}
              alt=""
            />
          </div> */}

            <div className="invoice-main">
              <div className="invoice-details">
                <div className="invoice-detail-1">
                  <h6>Name</h6>
                  <p>Shahadat Hossain</p>
                </div>
                <div className="invoice-detail-2">
                  <h6>Date</h6>
                  <p>17/11/2022</p>
                </div>
              </div>
              <div className="className=invoice-all-data-main">
                <div className="invoice-all-data">
                  <table className="table">
                    <thead>
                      <tr className="t-m">
                        <td className="text-left">Item</td>
                        <td className="text-right">Price</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="t-m">
                        <td className="text-left">Chair</td>
                        <td className="text-right">$500</td>
                      </tr>
                      <tr className="t-m">
                        <td className="text-left">BlackBoard</td>
                        <td className="text-right">$500</td>
                      </tr>
                      <tr className="t-m">
                        <td className="text-left">WhiteBoard</td>
                        <td className="text-right">$500</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="border-b"></div>
                  <div className="invoice-total">
                    <h3>Total</h3>
                    <p>$5000</p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            <div className="invoice-bal">
              <div>
                <h3>
                  Total <span>5000$</span>
                </h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Button>
        <div className="invoice-btn">
          {" "}
          <button onClick={handlePrint}>Download PDF</button>
        </div>
      </Button>
    </div>
  );
};

export default Receipt;
const Container = styled.div`
  position: static;
  top: 15%;
  left: 36%;

  .invoice-top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }
  .invoice {
    position: relative;
    margin: 30px 0;
    width: 650px;
    height: 680px;
    border: 0;
    border-radius: 30px;
    background-color: #2291f1;
    padding: 5px;
  }
  .invoice-main {
    position: relative;
    top: 28.5%;
    width: 44opx;
    height: 480px;
    background-color: #f8fafe;
    border: 0;
    border-radius: 30px;
  }
  .invoice-bal {
    position: absolute;
    background-color: #74aff8;
    width: 270px;
    height: 70px;
    border-radius: 5px;
    top: 23%;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid #f8fafe;
  }

  .invoice-bal h3 {
    font-weight: 500;
    font-size: 30px;
    color: white;
    text-transform: uppercase;
  }
  .invoice-bal p {
    font-size: 25px;
    color: #ffffff;
  }
  .invoice-data {
    position: absolute;
    text-align: center;
    top: 5%;
    left: 43%;
  }
  .invoice-data h5 {
    font-size: 35px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .invoice-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .invoice-detail-1 h6 {
    font-size: 16px;
    font-weight: 500;
    color: #949598;
  }
  .invoice-detail-2 {
    text-align: right;
  }
  .invoice-detail-2 h6 {
    font-size: 16px;
    font-weight: 500;
    color: #949598;
  }
  .invoice-header {
    margin: 10px 10px;
    display: flex;
    justify-content: space-between;
  }
  .invoice-header h3 {
    padding-left: 50px;
    font-size: 35px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .invoice-all-data-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .invoice-all-data {
    background-color: white;
    border-radius: 15px;
    margin-top: 25px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 20px 30px;
    box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
    -webkit-box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
    -moz-box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
    background-image: url(/img/icon/logo-o.png);
    background-position: center;

    background-repeat: no-repeat;
    background-size: 35%;
  }
  .table {
    width: 90%;
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
    padding-bottom: 10px;
  }
  .t-m {
  }
  .border-b {
    border-bottom: 1px solid #85878b;
  }
  .invoice-total {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 27px;
  }
  .invoice-total h3 {
    margin-right: 50px;
    font-weight: 500;
  }
`;

const Button = styled.div`
  .invoice-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .invoice-btn button {
    width: 250px;
    height: 60px;
    border: none;
    text-transform: uppercase;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
  }
`;
