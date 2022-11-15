import React from "react";
import styled from "styled-components";

const PaymentTable = ({ infos }) => {
  return (
    <TableContainer>
      {infos && infos.length > 0 && (
        <>
          <thead>
            <tr>
              <th>Items</th>
              <th>Cost</th>
              <th>Student</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {infos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <TableImage>
                      <img src="/img/icon/dummy-image.png" alt="" />
                      <h5>{item.itemName}</h5>
                    </TableImage>
                  </td>
                  <td>
                    <p>{item.cost}</p>
                  </td>
                  <td>
                    <p>{item.studentName}</p>
                  </td>
                  <td>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </td>
                  <td>
                    <Button disabled={item.status === "UNPAID" ? false : true}>
                      Pay Now
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
      {infos && infos.length === 0 && <h1>You have no Data</h1>}
    </TableContainer>
  );
};

export default PaymentTable;

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
  tbody tr td p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #0e3746;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 15px 0;
  }
  tbody tr td span {
    height: 100%;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #0e3746;
    width: 230px !important;
    display: inline-block;
  }
  /* @media only screen and (max-width: 688px) {
    width: 200px;
  } */
`;

const TableImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  }
`;
const Button = styled.button`
  background: #2291f1;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  border: none;
  padding: 7px 17px;
  margin-top: 9px;
`;
