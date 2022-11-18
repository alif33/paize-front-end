//

// import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
// import styled from "styled-components";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { __getData } from "../../__lib__/helpers/HttpService";
// import { useDispatch, useSelector } from "react-redux";

// const StudentPayment = () => {
//   const { _id } = useParams();
//   const [paymentsData, setPaymentsData] = useState();
//   const { users } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const { __u__ } = users;

//   //   useEffect(() => {
//   //     console.log("id", _id);
//   //     __getData(`/payment?_id=${_id}`, __u__.token).then((res) => {
//   //       setPaymentsData(res);
//   //     });
//   //   }, []);
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

//   return (
//     <div>
//       <Navbar />
//       <Container>
//         <div className="invoice-top">
//           <div id="divToPrint" className="invoice">
//             <div className="invoice-data">
//               <h5>donate statement</h5>
//             </div>
//             {/* <div className="invoice-header">
//           <h3>Invoice</h3>
//           <img
//             src="/img/icon/logo.svg"
//             style={{ width: "90px", height: "50px" }}
//             alt=""
//           />
//         </div> */}

//             <div className="invoice-main">
//               <div className="invoice-bal">
//                 <div>
//                   <h3>
//                     Total DONATE <span>$0000</span>
//                   </h3>
//                   <p></p>
//                 </div>
//               </div>
//               <div className="invoice-details">
//                 <div className="invoice-detail-1">
//                   <h6>Name</h6>
//                   <p>Shahadat</p>
//                 </div>
//                 <div className="invoice-detail-2">
//                   <h6>Date</h6>
//                   <p>12-11-2022</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="invoice-all-data">
//                   <table className="table">
//                     <thead>
//                       <tr className="t-m">
//                         <td className="text-left">Item</td>
//                         <td className="text-right">Price</td>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="t-m">
//                         <td className="text-left">Chair</td>
//                         <td className="text-right">$500</td>
//                       </tr>
//                       <tr className="t-m">
//                         <td className="text-left">Chair</td>
//                         <td className="text-right">$500</td>
//                       </tr>
//                       <tr className="t-m">
//                         <td className="text-left">Chair</td>
//                         <td className="text-right">$500</td>
//                       </tr>
//                       <tr className="t-m">
//                         <td className="text-left">Chair</td>
//                         <td className="text-right">$500</td>
//                       </tr>

//                     </tbody>
//                   </table>
//                   <div className="border-b"></div>
//                   <div className="invoice-total">
//                     <h3>Total</h3>
//                     <p>$500</p>
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

// export default StudentPayment;
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
//     width: 370px;

//     border-radius: 5px;
//     top: -25px;
//     left: 22%;
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
//     left: 25%;
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
import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
const StudentPayment = () => {
  const [detailsData, setDetailsData] = useState(false);
  return (
    <div>
      <Navbar />
      <Container>
        <Title>
          {" "}
          <h3>Payment History</h3>{" "}
        </Title>
        <TableContainer>
          <>
            <thead>
              <tr>
                <th>Purchase Date</th>
                <th>Item Number</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>11.8.22</p>
                </td>
                <td>
                  <p>#88698</p>
                </td>
                <td
                  onClick={() => setDetailsData(!detailsData)}
                  style={{ cursor: "pointer" }}
                  className="table-end"
                >
                  <p>$1300 </p>

                  <p className="table-end-icon">
                    <IoMdArrowDropright />
                  </p>
                </td>
              </tr>
              {detailsData && (
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
              <tr>
                <td>
                  <p>11.8.22</p>
                </td>
                <td>
                  <p>#88698</p>
                </td>
                <td
                  onClick={() => setDetailsData(!detailsData)}
                  className="table-end"
                >
                  <p>$1300 </p>

                  <p className="table-end-icon">
                    <IoMdArrowDropright />
                  </p>
                </td>
              </tr>
            </tbody>
          </>
        </TableContainer>
      </Container>
    </div>
  );
};

export default StudentPayment;

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

    padding-top: 10px;
  }
`;

const TableContainer = styled.table`
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
    padding-left: 60px;
    text-align: left;
  }
  tbody tr td {
    padding: 0.75rem;
    padding-left: 60px;
    border-bottom: 1px solid #dee2e6;
  }
  tbody tr td p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #0e3746;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100%;
    padding: 15px 0;
  }
  tbody tr td span {
    font-size: 30px;
  }
  .table-end {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .table-end-icon {
    font-size: 30px;
  }
  /* @media only screen and (max-width: 688px) {
    width: 200px;
  } */
`;

const TableImage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .radio-container {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #2291f1;
    position: relative;
    margin-right: 10px;
  }

  .radio {
    top: 2px;
    left: 2px;
    padding: 6px;
    border-radius: 6px;
    background: #2291f1;
    position: absolute;
  }

  input {
    width: 25px;
    height: 25px;
  }

  img {
    width: 62px;
    height: 62px;
    border-radius: 7px;
  }

  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #0e3746;
    margin-left: 10px;
  }
`;

const Button = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
`;
const TableData = styled.div`
  position: relative;
  left: 920px;
  .data {
    width: 400px;
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
