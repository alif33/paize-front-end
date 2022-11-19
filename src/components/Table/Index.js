import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";
import { Sortern } from "../../__lib__/helpers/Validator";

const Table = ({ active, needs, items, setItems }) => {
  const handleSelect = (_id) => {
    if (items.includes(_id)) {
      setItems(items.filter((item) => item !== _id));
    } else {
      setItems([...items, _id]);
    }
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Items</th>
          <th>Cost</th>
          <th>Student</th>
          <th>Description</th>
          {
            active && (
              <th>Action</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {needs.map((need, index) => {
          return (
            <tr key={index}>
              <td>
                <TableImage>
                  {
                    active && (
                      <div
                        onClick={() => handleSelect(need._id)}
                        className="radio-container"
                      >
                        {items.includes(need._id) && <div className="radio"></div>}
                      </div>
                    )
                  }
                  <img src={`${APP_URL}/${need.itemImage}`} alt="" />
                  <h5>{need.itemName}</h5>
                </TableImage>
              </td>
              <td>
                <p>{need.cost}</p>
              </td>
              <td>
                <p>{need.studentName}</p>
              </td>
              <td>
                <span>{Sortern(need.description, 10)}</span>
              </td>
              {
                active && (
                  <Link to={`/update-item/${need._id}`}>
                    <td
                      style={{ cursor: "pointer" }}
                    >
                      <img src="/img/icon/edit.png" alt="" />
                    </td>
                  </Link>
                )
              }
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.table`
  text-align: center;
  width: 95%;
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
`;

const TableImage = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: start;
  align-items: center;

  .radio-container {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #2291f1;
    position: relative;
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
    margin-left: 20px;
  }
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #0e3746;
    padding-left: 10px;
  }
`;

const TableTD = styled.div`
  cursor: pointer;
`;
