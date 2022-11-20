// import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar";
// import styled from "styled-components";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { __getData } from "../../__lib__/helpers/HttpService";
// import moment from "moment/moment";

// const StudentPayment = () => {
//   const [detailsData, setDetailsData] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState();
//   const [payments, setPayments] = useState([]);
//   const { users } = useSelector((state) => state);
//   const { __u__ } = users;

//   useEffect(() => {
//     __getData("student/payments", __u__.token).then((res) => {
//       if (res) {
//         setPayments(res);
//         setLoading(false);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Container>
//         <Title>
//           {" "}
//           <h3>Payments History</h3>{" "}
//         </Title>

//         <div>
//           <div className="data-header">
//             <p className="ml-33">DATE</p>
//             <p className="ml-33-2">STATUS</p>
//             <p className="ml-34 position">TOTAL</p>
//           </div>
//           {!loading &&
//             payments.map((payment, index) => (
//               <>
//                 <div className="data-main">
//                   <p className="ml-33">
//                     {moment(payment.createdAt).format("ll")}
//                   </p>
//                   <p className="ml-33-2">
//                     {payment?.amount === 0 ? "PENDING" : "PAID"}
//                   </p>
//                   <p
//                     onClick={() => setOpen(open === index ? -1 : index)}
//                     style={{ cursor: "pointer" }}
//                     className="table-end ml-34"
//                   >
//                     {payment.amount}
//                     <span className="table-end-icon">
//                       {open === index && <IoMdArrowDropup />}
//                       {open !== index && <IoMdArrowDropdown />}
//                     </span>
//                   </p>
//                 </div>
//                 {open === index && (
//                   <TableData>
//                     <div className="data">
//                       <div className="data-header">
//                         <p className="ml-33">Item Name</p>
//                         <p className="ml-33-2">Item Image</p>
//                         <p className="ml-34">Per Cost</p>
//                       </div>
//                       {payment.needs.map((need) => (
//                         <div className="data-main">
//                           <p className="ml-33">{need?.itemName}</p>

//                           <img
//                             className="ml-33-2"
//                             src={need.itemImage}
//                             alt=""
//                           />
//                           <p className="ml-34">${need?.cost}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </TableData>
//                 )}
//               </>
//             ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default StudentPayment;

// const Container = styled.div`
//   .data-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;
//     background: rgba(34, 145, 241, 0.14);
//     text-align: left;

//     //styleName: Heading 5;
//     font-family: Poppins;
//     font-size: 22px;
//     font-weight: 600;
//     line-height: 30px;
//     letter-spacing: -0.02em;
//     color: #0e3746;
//     padding-left: 50px;
//     padding-right: 50px;
//   }
//   .data-main {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;

//     font-family: Poppins;
//     font-size: 20px;
//     font-weight: 500;
//     line-height: 36px;
//     letter-spacing: 0em;
//     text-align: right;
//     padding-left: 50px;
//     padding-right: 50px;
//     padding-top: 20px;
//     padding-bottom: 20px;
//   }
//   /* .position {
//     width: 400px;
//     text-align: right;
//   } */
//   .ml-33 {
//     width: 33%;
//     text-align: left;
//   }
//   .ml-33-2 {
//     width: 33%;
//     text-align: left;
//     padding-left: 15%;
//   }
//   .ml-34 {
//     width: 34%;
//     text-align: right;
//   }
// `;
// const Title = styled.div`
//   h3 {
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 35px;
//     line-height: 62px;
//     color: #0e3746;
//     margin-top: 10px;
//     padding-left: 40px;
//     padding-top: 15px;
//     padding-bottom: 15px;
//   }
// `;

// const TableData = styled.div`
//   /* margin-left: 1007px; */
//   img {
//     width: 40px;
//     height: 40px;
//   }
//   .data {
//     border: 2px dotted;
//     width: 100%;
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

//     color: #3d9ff3;
//   }
//   .data-main {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-family: Poppins;
//     font-size: 18px;
//     font-weight: 500;
//     line-height: 36px;
//     letter-spacing: 0em;
//     text-align: left;
//     color: #8b8b8b;
//   }
// `;

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import {
  IoIosCheckmarkCircle,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { __getData } from "../../__lib__/helpers/HttpService";
import moment from "moment/moment";
import AdminPaymentsModal from "../AdminPayments/AdminPaymentsModal";

const StudentPayment = () => {
  const [detailsData, setDetailsData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  const [payments, setPayments] = useState([]);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;
  const [modal, setModal] = useState(false);
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
