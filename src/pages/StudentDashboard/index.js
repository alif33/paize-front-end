import React, { useEffect, useState, CSSProperties } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import DotLoader from "react-spinners/DotLoader";
import PaymentTable from "../../components/PaymentTable";
import { __getData } from "../../__lib__/helpers/HttpService";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const StudentDashboard = () => {
  const [infos, setInfos] = useState();
  const [loading, setLoading] = useState(true);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  useEffect(() => {
    __getData("/student/items", __u__.token).then((res) => {
      setLoading(false);
      setInfos(res);
      console.log(res);
    });
  }, []);

  console.log(users);
  return (
    <div> 
      <ResNav>
        <Navbar />
      </ResNav>
      <Container>
        <Title>Needs</Title>
        {loading && (
          <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />
        )}
        {!loading && infos && <PaymentTable infos={infos} />}
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
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 51px;
  color: #0e3746;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ResNav = styled.div`
  @media only screen and (max-width: 688px) {
    width: 650px;
  }
`;
