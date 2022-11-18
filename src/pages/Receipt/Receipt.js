// import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
// import styled from "styled-components";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { __getData } from "../../__lib__/helpers/HttpService";
// import { useDispatch, useSelector } from "react-redux";
// const Receipt = () => {
//   const { _id } = useParams();
//   const [paymentsData, setPaymentsData] = useState();
//   const { users } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const { __u__ } = users;

//   useEffect(() => {
//     console.log("id", _id);
//     __getData(`/payment?_id=${_id}`, __u__.token).then((res) => {
//       setPaymentsData(res);
//     });
//   }, []);
//   const handlePrint = () => {
//     const input = document.getElementById("divToPrint");
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF({
//         unit: "px",
//         format: [700, 550],
//       });

//       pdf.addImage(imgData, "JPEG", 50, 50);
//       // pdf.output('dataurlnewwindow');
//       pdf.save("receipt.pdf");
//     });
//   };
//   console.log("paymentsData", paymentsData);
//   return (
//     <div>
//       <Navbar />
//       <Container>
//         <div className="invoice-top">
//           <div id="divToPrint" className="invoice">
//             <div className="invoice-data">
//               <h5>Receipt</h5>
//               <p>#{paymentsData?._id}</p>
//             </div>
//             {/* <div className="invoice-header">
//             <h3>Invoice</h3>
//             <img
//               src="/img/icon/logo.svg"
//               style={{ width: "90px", height: "50px" }}
//               alt=""
//             />
//           </div> */}

//             <div className="invoice-main">
//               <div className="invoice-bal">
//                 <div>
//                   <h3>
//                     Total <span>{paymentsData?.amount}$</span>
//                   </h3>
//                   <p></p>
//                 </div>
//               </div>
//               <div className="invoice-details">
//                 <div className="invoice-detail-1">
//                   <h6>Name</h6>
//                   <p>
//                     {paymentsData?.student?.firstName}{" "}
//                     {paymentsData?.student?.lastName}
//                   </p>
//                 </div>
//                 <div className="invoice-detail-2">
//                   <h6>Date</h6>
//                   <p>{paymentsData?.createdAt.slice(0, 10)}</p>
//                 </div>
//               </div>
//               <div className="className=invoice-all-data-main">
//                 <div className="invoice-all-data">
//                   <table className="table">
//                     <thead>
//                       <tr className="t-m">
//                         <td className="text-left">Item</td>
//                         <td className="text-right">Price</td>
//                       </tr>
//                     </thead>
//                     {paymentsData?.needs.map((paymentData, index) => {
//                       return (
//                         <tbody>
//                           <tr className="t-m">
//                             <td className="text-left">
//                               {paymentData?.itemName}
//                             </td>
//                             <td className="text-right">${paymentData?.cost}</td>
//                           </tr>
//                         </tbody>
//                       );
//                     })}
//                   </table>
//                   <div className="border-b"></div>
//                   <div className="invoice-total">
//                     <h3>Total</h3>
//                     <p>${paymentsData?.amount}</p>
//                   </div>
//                 </div>
//               </div>
//               {/*  */}
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Button>
//         <div className="invoice-btn">
//           {" "}
//           <button onClick={handlePrint}>Download PDF</button>
//         </div>
//       </Button>
//     </div>
//   );
// };

// export default Receipt;
// const Container = styled.div`
//   position: static;
//   top: 15%;
//   left: 36%;

//   .invoice-top {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 50px;
//   }
//   .invoice {
//     position: relative;
//     margin: 30px 0;
//     width: 650px;

//     border: 0;
//     border-radius: 30px;
//     background-color: #2291f1;

//     /* padding-top: 116px; */
//     padding: 170px 5px 5px 5px;
//   }
//   .invoice-main {
//     position: relative;
//     top: 28.5%;
//     width: 44opx;
//     padding-bottom: 100px;
//     background-color: #f8fafe;
//     border: 0;
//     border-radius: 30px;
//   }
//   .invoice-bal {
//     position: absolute;
//     background-color: #74aff8;
//     width: 270px;
//     height: 70px;

//     border-radius: 5px;
//     top: -35px;
//     left: 30%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     border: 2px solid #f8fafe;
//   }

//   .invoice-bal h3 {
//     font-weight: 500;
//     font-size: 30px;
//     color: white;
//     text-transform: uppercase;
//   }
//   .invoice-bal p {
//     font-size: 25px;
//     color: #ffffff;
//   }
//   .invoice-data {
//     position: absolute;
//     text-align: center;
//     top: 20px;
//     left: 32%;
//   }
//   .invoice-data h5 {
//     font-size: 35px;
//     font-weight: 500;
//     text-transform: uppercase;
//   }
//   .invoice-details {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-top: 70px;
//     padding-bottom: 10px;
//     padding-left: 25px;
//     padding-right: 25px;
//   }
//   .invoice-detail-1 h6 {
//     font-size: 16px;
//     font-weight: 500;
//     color: #949598;
//   }
//   .invoice-detail-2 {
//     text-align: right;
//   }
//   .invoice-detail-2 h6 {
//     font-size: 16px;
//     font-weight: 500;
//     color: #949598;
//   }
//   .invoice-header {
//     margin: 10px 10px;
//     display: flex;
//     justify-content: space-between;
//   }
//   .invoice-header h3 {
//     padding-left: 50px;
//     font-size: 35px;
//     font-weight: 300;
//     text-transform: uppercase;
//   }
//   .invoice-all-data-main {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .invoice-all-data {
//     background-color: white;
//     border-radius: 15px;
//     margin-top: 25px;
//     margin-right: 10px;
//     margin-left: 10px;
//     padding: 20px 30px;

//     box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
//     -webkit-box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
//     -moz-box-shadow: 0px 0px 28px 0px rgba(171, 150, 150, 0.75);
//     background-image: url(/img/icon/logo-o.png);
//     background-position: center;

//     background-repeat: no-repeat;
//     background-size: 35%;
//   }
//   .table {
//     width: 90%;
//     text-align: center;
//   }
//   .text-right {
//     text-align: right;
//   }
//   .text-left {
//     text-align: left;
//     padding-bottom: 10px;
//   }
//   .t-m {
//   }
//   .border-b {
//     border-bottom: 1px solid #85878b;
//   }
//   .invoice-total {
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     padding-right: 27px;
//   }
//   .invoice-total h3 {
//     margin-right: 50px;
//     font-weight: 500;
//   }
// `;

// const Button = styled.div`
//   .invoice-btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 20px;
//     margin-bottom: 20px;
//   }
//   .invoice-btn button {
//     width: 250px;
//     height: 60px;
//     border: none;
//     text-transform: uppercase;
//     border-radius: 10px;
//     font-size: 25px;
//     cursor: pointer;
//   }
// `;
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
      setPaymentsData(res);
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
      <Container>
        <div id="divToPrint">
          <div className="receipt-header">
            <p>Money Recipt</p>
            <p>Order ID: #{paymentsData?._id}</p>
          </div>
          <div className="receipt-header-2">
            <h4>Hello {paymentsData?.student?.firstName},</h4>
            <h3>THANKS FOR YOUR ORDER!</h3>
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
              <p>Payment Method</p>
              <h4>Credit Card </h4>
            </div>
          </div>
          <div className="border-b"></div>

          {paymentsData?.needs?.map((paymentData) => (
            <div className="receipt-data">
              <div className="receipt-data-div">
                <img
                  src="/img/icon/logo.svg"
                  style={{ width: "100px", height: "95px" }}
                  alt=""
                  srcset=""
                />
                <div>
                  <p>Product Name</p>
                  <h3>{paymentData?.itemName}</h3>
                </div>
              </div>
              <div>
                <p>Membership </p>
                <h3>Student </h3>
              </div>
              <div>
                <p>Amount </p>
                <h3>${paymentData?.cost}</h3>
              </div>
            </div>
          ))}

          <div className="border-b"></div>
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
          <button onClick={handlePrint}>Download PDF</button>
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
      </Container>
    </div>
  );
};

export default Receipt;

const Container = styled.div`
  .receipt-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #808080;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
  .receipt-header-2 {
    padding-top: 20px;
    padding-left: 20px;
  }
  .receipt-header-2 h4 {
    font-size: 24px;
    font-weight: 600;
  }
  .receipt-header-2 h3 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
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
    font-size: 16px;
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
    font-size: 32px;
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
    align-items: center;
    gap: 10px;
  }
  .receipt-footer-under p {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #2291f1;
  }
`;
