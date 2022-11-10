import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { APP_URL } from "../../__lib__/helpers/HttpService";

const Table = ({ needs, items, setItems }) => {
  const handleSelect = (e) => {
    const { value } = e.target;
    console.log("value", value);

    if (e.target.checked) {
      document.getElementById(value).checked = false;
    }

    // else{
    //     document.getElementById(value).checked = true;
    // }

    // console.log();
    // document.querySelectorAll(`#${value}`)
    // if(e.target.checked){
    //     e.target.checked = false;
    // }else{
    //     e.target.checked = true;
    // }
    // console.log(value);
    // setItems(needs);
    // if(!items.includes(value)){
    //     setItems([items.remove(value)]);
    // }else{
    //     setItems([...items, value]);
    // }

    // console.log(e.target.checked);
  };
  const handleUpdate = (id) => {
    console.log("object", id);
  };

  return (
    <TableContainer>
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
        {needs.map((need, index) => {
          return (
            <tr key={index}>
              <td>
                <TableImage>
                  <input
                    id={need._id}
                    type="radio"
                    name={need._id}
                    value={need._id}
                    // checked={ items.includes(need._id) }
                    onChange={(e) => handleSelect(e)}
                  />
                  <img src={`${APP_URL}/${need.studentImage}`} alt="" />
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
                <span>{need.description}</span>
              </td>

              <Link to={`/update-item/${need._id}`}>
                <td
                  id={need._id}
                  name={need._id}
                  value={need._id}
                  className=""
                  style={{ cursor: "pointer" }}
                  onClick={() => handleUpdate(need._id)}
                >
                  <img src="/img/icon/edit.png" alt="" />
                </td>
              </Link>
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
