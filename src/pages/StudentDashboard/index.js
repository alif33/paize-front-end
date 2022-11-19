import React, { useEffect, useState, CSSProperties } from "react";
// import { Elements, PaymentElement } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import DotLoader from "react-spinners/DotLoader";
import PaymentTable from "../../components/PaymentTable";
import { authPost, __getData } from "../../__lib__/helpers/HttpService";
import { Link } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const StudentDashboard = () => {
  const [infos, setInfos] = useState([]);
  const [paids, setPaids] = useState([]);
  const [amount, setAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navLink, setNavLink] = useState("active");
  const [students, setStudents] = useState();
  const [unPaidData, setUnPaidData] = useState();
  const [studentsData, setStudentsData] = useState();
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  const fetchItems = () => {
    __getData(
      `/student/items?_school=${__u__.info._school}&status=UNPAID`,
      __u__.token
    ).then((res) => {
      setLoading(false);
      setInfos(res.actives);
      setPaids(res.paids);
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const payNow = async (_stripe) => {
    authPost(
      "/pay",
      {
        _stripe,
        amount,
        needs: items,
        school: __u__.info._school,
      },
      __u__.token
    ).then((res) => {
      if (res.success) {
        fetchItems();
      }
    });
  };

  return (
    <div>
      <ResNav>
        <Navbar />
      </ResNav>
      <Container>
        <Title>
          <h3>Needs</h3>
          {items.length > 0 && (
            <AreaPay>
              <p>Total : {amount}$</p>
              <StripeCheckout
                stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                label="Pay Now"
                name="Pay With Credit Card"
                billingAddress
                shippingAddress
                amount={amount * 100}
                description={`Your total is $${amount}`}
                token={payNow}
              />
            </AreaPay>
          )}
        </Title>
        <TableNavList>
          <li
            onClick={() => setNavLink("active")}
            className={ navLink === "active" ? "active" : "" }
          >
            Active(<span>{ infos.length }</span>)
          </li>
          <li
            onClick={() => setNavLink("paid")}
            className={ navLink === "paid" ? "active" : "" }
          >
            Paid(
            <span>{ paids.length }</span>)
          </li>
        </TableNavList>

        {loading && (
          <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />
        )}


        {!loading && infos && (
          <PaymentTable
            active={navLink === "active"? true: false }
            infos={ navLink === "active"? infos: paids }
            items={items}
            setItems={setItems}
            amount={amount}
            setAmount={setAmount}
            fetchItems={fetchItems}
          />
        )}
      </Container>
    </div>
  );
};

export default StudentDashboard;

const Container = styled.div`
  width: 92%;
  margin: auto;
  @media only screen and (max-width: 688px) {
    width: 650px;
  }
`;
const Title = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 62px;
    color: #0e3746;
    margin-top: 10px;

    padding-top: 20px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 35px;
  }
  a {
    background: rgba(34, 145, 241, 0.14);
    border-radius: 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #2291f1;
    text-decoration: none;
    padding: 12px 24px;
  }
  @media only screen and (max-width: 688px) {
    a {
      font-size: 6px;
    }
  }
`;

const AreaPay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding-right: 20px;
  }

  button {
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
    cursor: pointer;
  }
`;
const TableNavList = styled.ul`
  margin-top: 20px;
  margin-bottom: 5px;
  li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: rgba(14, 55, 70, 0.4);
    border-right: 2px solid rgba(14, 55, 70, 0.4);
    display: inline-block;
    margin-right: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  li:last-child {
    border-right: none;
  }
  li.active {
    color: #2291f1;
  }
`;

const ResNav = styled.div`
  @media only screen and (max-width: 688px) {
    width: 650px;
  }
`;
