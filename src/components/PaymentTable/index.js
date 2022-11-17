import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import { APP_URL, authPost } from "../../__lib__/helpers/HttpService";
import ItemModal from "../ItemModal/ItemModal";

const PaymentTable = ({ infos, items, setItems, amount, setAmount }) => {
  const [modal, setModal] = useState(false);
  const [itemData, setItemData] = useState(" ");
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  const handleSelect = (_id, cost) => {
    if (items.includes(_id)) {
      setAmount(amount - cost);
      setItems(items.filter((item) => item !== _id));
    } else {
      setAmount(amount + cost);
      setItems([...items, _id]);
    }
  };

  const payNow = (_stripe) => {
    authPost(
      "/pay",
      {
        _stripe,
        amount: 1000,
      },
      __u__.token
    ).then((res) => {
      console.log(res);
    });
  };

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
              <th>{!items.length > 0 ? "Action" : ""}</th>
            </tr>
          </thead>
          <tbody>
            {infos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <TableImage>
                      <div
                        onClick={() => handleSelect(item._id, item.cost)}
                        className="radio-container"
                      >
                        {items.includes(item._id) && (
                          <div className="radio"></div>
                        )}
                      </div>
                      <img
                        onClick={() => {
                          setModal(!modal);
                          setItemData(item);
                        }}
                        src={`${APP_URL}/${item.itemImage}`}
                        alt=""
                      />

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
                    <span>{item.description.slice(1, 40)}...</span>
                  </td>
                  <td>
                    {item.status === "PAID" || items.length > 0 ? (
                      <></>
                    ) : (
                      <Button>
                        <StripeCheckout
                          stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                          label="Pay Now"
                          name="Pay With Credit Card"
                          billingAddress
                          shippingAddress
                          amount={item.cost * 100}
                          description={`Your total is $${item.cost}`}
                          token={payNow}
                        />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
      {infos && infos.length === 0 && <h1>You have no Data</h1>}

      {modal && (
        <ItemModal
          setItemData={setItemData}
          itemData={itemData}
          setModal={setModal}
          modal={modal}
        />
      )}
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
