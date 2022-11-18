// import React from "react";
// import Navbar from "../../components/Navbar";
// import styled from "styled-components";
// import { IoMdArrowDropright } from "react-icons/io";
// import { useState } from "react";
// const StudentPayment = () => {
//   const [detailsData, setDetailsData] = useState(false);
//   return (
//     <div>
//       <Navbar />
//       <Container>
//         <Title>
//           {" "}
//           <h3>Payment History</h3>{" "}
//         </Title>
//         <TableContainer>
//           <>
//             <thead>
//               <tr>
//                 <th>Purchase Date</th>
//                 <th>Item Number</th>
//                 <th>Cost</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <p>11.8.22</p>
//                 </td>
//                 <td>
//                   <p>#88698</p>
//                 </td>
//                 <td
//                   onClick={() => setDetailsData(!detailsData)}
//                   style={{ cursor: "pointer" }}
//                   className="table-end"
//                 >
//                   <p>$1300 </p>

//                   <p className="table-end-icon">
//                     <IoMdArrowDropright />
//                   </p>
//                 </td>
//               </tr>
//               {detailsData && (
//                 <TableData>
//                   <div className="data">
//                     <div className="data-header">
//                       <p>Item Name</p>
//                       <p>Per Cost</p>
//                     </div>
//                     <div className="data-main">
//                       <p>Member ship</p>
//                       <p>$1000</p>
//                     </div>
//                     <div className="data-main">
//                       <p>Member ship</p>
//                       <p>$300</p>
//                     </div>
//                   </div>
//                 </TableData>
//               )}
//               <tr>
//                 <td>
//                   <p>11.8.22</p>
//                 </td>
//                 <td>
//                   <p>#88698</p>
//                 </td>
//                 <td
//                   onClick={() => setDetailsData(!detailsData)}
//                   className="table-end"
//                 >
//                   <p>$1300 </p>

//                   <p className="table-end-icon">
//                     <IoMdArrowDropright />
//                   </p>
//                 </td>
//               </tr>
//             </tbody>
//           </>
//         </TableContainer>
//       </Container>
//     </div>
//   );
// };

// export default StudentPayment;

// const Container = styled.div``;
// const Title = styled.div`
//   h3 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 35px;
//     line-height: 62px;
//     color: #0e3746;
//     margin-top: 10px;
//     padding-left: 20px;
//     padding-top: 10px;
//     padding-bottom: 10px;
//   }
// `;

// const TableContainer = styled.table`
//   width: 100%;
//   margin: auto;
//   margin-bottom: 1rem;
//   background-color: transparent;
//   border-collapse: collapse;

//   thead {
//     background: rgba(34, 145, 241, 0.14);
//   }
//   thead th {
//     background: rgba(34, 145, 241, 0.14);
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 30px;
//     letter-spacing: -0.02em;
//     color: #0e3746;
//     padding: 10px 0;
//     padding-left: 60px;
//     text-align: left;
//   }
//   tbody tr td {
//     padding: 0.75rem;
//     padding-left: 60px;
//     border-bottom: 1px solid #dee2e6;
//   }
//   tbody tr td p {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 36px;
//     color: #0e3746;
//     /* display: flex;
//     justify-content: center;
//     align-items: center; */
//     height: 100%;
//     padding: 15px 0;
//   }
//   tbody tr td span {
//     font-size: 30px;
//   }
//   .table-end {
//     display: flex;
//     justify-content: start;
//     align-items: center;
//   }
//   .table-end-icon {
//     font-size: 30px;
//   }
//   /* @media only screen and (max-width: 688px) {
//     width: 200px;
//   } */
// `;

// const TableImage = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 30px;

//   .radio-container {
//     padding: 8px;
//     border-radius: 8px;
//     cursor: pointer;
//     border: 1px solid #2291f1;
//     position: relative;
//     margin-right: 10px;
//   }

//   .radio {
//     top: 2px;
//     left: 2px;
//     padding: 6px;
//     border-radius: 6px;
//     background: #2291f1;
//     position: absolute;
//   }

//   input {
//     width: 25px;
//     height: 25px;
//   }

//   img {
//     width: 62px;
//     height: 62px;
//     border-radius: 7px;
//   }

//   h5 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 36px;
//     color: #0e3746;
//     margin-left: 10px;
//   }
// `;

// const Button = styled.div`
//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 17px;
//   cursor: pointer;
// `;
// const TableData = styled.div`
//   position: relative;
//   left: 920px;
//   width: 100%;
//   .data {
//     width: 400px;
//   }
//   .data-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .data-header p {
//     font-family: Poppins;
//     font-size: 20px;
//     font-weight: 600;
//     line-height: 39px;
//     letter-spacing: 0em;
//     text-align: left;
//     color: #3d9ff3;
//   }
//   .data-main {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-family: Poppins;
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 36px;
//     letter-spacing: 0em;
//     text-align: left;
//     color: #8b8b8b;
//   }
// `;

import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const StudentPayment = () => {
  const [detailsData, setDetailsData] = useState(false);
  console.log("detailsData", detailsData);
  return (
    <div>
      <Navbar />
      <Container>
        <Title>
          {" "}
          <h3>Payment History</h3>{" "}
        </Title>

        <div>
          <div className="data-header">
            <p className="">Donation Date</p>
            <p className="ml">Item Number</p>
            <p className="ml-2">Cost</p>
          </div>
          <div className="data-main">
            <p>11.8.22</p>
            <p>#88698</p>
            <p
              onClick={() => setDetailsData(!detailsData)}
              style={{ cursor: "pointer" }}
              className="table-end"
            >
              $1300
              <span className="table-end-icon">
                {detailsData && <IoMdArrowDropup />}
                {!detailsData && <IoMdArrowDropdown />}
              </span>
            </p>
          </div>
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
          <div className="data-main">
            <p>11.8.22</p>
            <p>#88698</p>
            <p
              onClick={() => setDetailsData(!detailsData)}
              style={{ cursor: "pointer" }}
              className="table-end"
            >
              $1300
              <span className="table-end-icon">
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
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
