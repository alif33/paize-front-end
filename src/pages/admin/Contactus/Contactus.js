import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../../components/admin/AdminNavbar";
import { __getData } from "../../../__lib__/helpers/HttpService";

const Contactus = () => {
  const [loading, setLoading] = useState(true);
  const [contactMessage, setContactMessage] = useState(null);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  useEffect(() => {
    __getData("/contacts", __u__.token)
      .then((res) => {
        console.log("contactMessage-res", res);
        setLoading(false);
        setContactMessage(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("contactMessage", contactMessage);
  return (
    <Container>
      <Navbar />
      <Title>Contactus Massage</Title>
      <TableContainer>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              2
            </td>
            <td>
              3
            </td>
            <td>
              4
            </td>
          </tr>
        </tbody>
      </TableContainer>
    </Container>
  );
};

export default Contactus;

const Container = styled.div`
  width: 92%;
  margin: auto;
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 62px;
  color: #0e3746;
  padding: 30px 0px 10px 0px;
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
  /* tbody tr td span{
height: 100%;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
    line-height: 30px;
    color: #0E3746;
    width: 230px !important;
    display: inline-block;
} */
`;

const TableImage = styled.div`
  display: flex;
  justify-content: left;
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
    margin-left: 40px;
  }
`;

const Button2 = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #20e300;
  background: rgba(32, 227, 0, 0.14);
  border: none;
  padding: 5px 23px;
  margin-top: 13px;
`;
const Button3 = styled(Button2)`
  background: rgba(255, 0, 0, 0.14);
  color: #ff0000;
`;
