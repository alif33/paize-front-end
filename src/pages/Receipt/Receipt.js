import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { __getData } from "../../__lib__/helpers/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import DotLoader from "react-spinners/DotLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};
const Receipt = () => {
  const { _id } = useParams();
  const [paymentsData, setPaymentsData] = useState();

  const [loading, setLoading] = useState(true);
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { __u__ } = users;
  const navigate = useNavigate();
  useEffect(() => {
    console.log("id", _id);
    __getData(`/payment?_id=${_id}`, __u__.token).then((res) => {
      setPaymentsData(res);
      setLoading(false);
    });
  }, []);
  const handlePrint = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [20, 25],
      });

      pdf.addImage(imgData, "JPEG", 2, 2);
      // pdf.output('dataurlnewwindow');
      pdf.save("receipt.pdf");
    });
  };
  console.log("paymentsData", paymentsData);
  return (
    <div>
      <Navbar />
      {loading && (
        <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />
      )}
      {!loading && (
        <Container>
          <div id="divToPrint">
            <div className="receipt-header">
              <p>Money Recipt</p>
              <p>Order ID: #{paymentsData?._id}</p>
            </div>
            <div className="receipt-header-2">
              <div>
                <h4>Hello {paymentsData?.student?.firstName},</h4>
                <h3>THANKS FOR YOUR donation!</h3>
              </div>

              <div className="receipt-footer-under">
                <p>Student Book</p>
                <img
                  src="/img/icon/logo.svg"
                  style={{ width: "100px", height: "95px" }}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="receipt-header-3">
              <div>
                <p>Full Name</p>
                <h4>
                  {paymentsData?.student?.firstName}{" "}
                  {paymentsData?.student?.lastName}{" "}
                </h4>
              </div>
              <div>
                <p style={{ textAlign: "right" }}>Payment Method</p>
                <h4>Credit Card </h4>
              </div>
            </div>
            <div className="border-b"></div>

            {paymentsData?.needs?.map((paymentData) => (
              <div>
                <div className="receipt-data">
                  <div className="receipt-data-div">
                    <img
                      src={paymentData?.itemImage}
                      style={{ width: "100px", height: "95px" }}
                      alt=""
                      srcset=""
                    />
                    <div>
                      <h3>{paymentData?.itemName}</h3>
                    </div>
                  </div>
                  <div>
                    <h3>{paymentData?.studentName} </h3>
                  </div>
                  <div>
                    <h3>${paymentData?.cost}</h3>
                  </div>
                </div>
                <div className="border-b"></div>
              </div>
            ))}

            <div className="receipt-total">
              <div>
                <h4>ORDER TOTAL</h4>
                <p>(Vat & Tax Included)</p>
              </div>
              <div>
                <p id="total-value">${paymentsData?.amount}</p>
              </div>
            </div>
          </div>
          <div className="receipt-footer">
            <div onClick={() => navigate(-1)}>
              <IoIosArrowBack className="receipt-footer-arrow" />
            </div>
            <div>
              <button onClick={handlePrint}>Download PDF</button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Receipt;

const Container = styled.div`
  .receipt-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #808080;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
  .receipt-header-2 {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .receipt-header-2 h4 {
    font-size: 24px;
    font-weight: 600;
  }
  .receipt-header-2 h3 {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
  }
  .receipt-header-3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .receipt-header-3 p {
    color: #858585;
    font-weight: 400;
    font-size: 14px;
  }
  .receipt-header-3 h4 {
    font-weight: 400;
    font-size: 24px;
  }
  .border-b {
    border-bottom: 1px solid #85878b;
  }
  .receipt-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .receipt-data h3 {
    font: 24px;
    font-weight: 600;
  }
  .receipt-data img {
    border-radius: 7px;
  }
  .receipt-data p {
    font-size: 20px;
    color: #a09e9e;
    font-weight: 400;
  }
  .receipt-data-div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .receipt-total {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .receipt-total p {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #7e7e7e;
  }
  .receipt-total h4 {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0.05em;
    text-align: left;
  }
  #total-value {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #2291f1;
  }

  .receipt-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .receipt-footer button {
    width: 301px;
    height: 65px;
    background-color: #2291f1;
    border: none;
    border-radius: 7px;
    text-transform: uppercase;
    font-family: Poppins;
    font-size: 23px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-align: center;
    cursor: pointer;
  }
  .receipt-footer-under {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
  }
  .receipt-footer-arrow {
    font-size: 50px;
    cursor: pointer;
  }
  .receipt-footer-under p {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #2291f1;
  }
`;
