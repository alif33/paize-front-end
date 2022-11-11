import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DotLoader from "react-spinners/DotLoader";
import AdminStudentTable from "../../../components/admin/AdminStudentTable";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import { getData } from "../../../__lib__/helpers/HttpService";
import { sortByStatus } from "../../../__lib__/helpers/Filter";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [schools, setSchools] = useState();
  const [schoolsData, setSchoolsData] = useState();
  const [navLink, setNavLink] = useState("all");

  useEffect(() => {
    getData("/schools")
      .then((res) => {
        setLoading(false);
        setSchools(res);
        setSchoolsData(sortByStatus(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ResNav>
        <AdminNavbar />
      </ResNav>

      <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />
      {!loading && schools && schools.length > 0 && (
        <Container>
          <Title>Admin DashBoard</Title>
          <TableNavList>
            <li
              onClick={() => setNavLink("all")}
              className={navLink === "all" ? "active" : "all"}
            >
              All(<span>{schools && schools.length}</span>)
            </li>
            <li
              onClick={() => setNavLink("pending")}
              className={navLink === "pending" ? "active" : "all"}
            >
              Pending(
              <span>{schoolsData?.pending && schoolsData?.pending.length}</span>
              )
            </li>
            <li
              onClick={() => setNavLink("approved")}
              className={navLink === "approved" ? "active" : "all"}
            >
              Approved(
              <span>
                {schoolsData?.approved && schoolsData?.approved.length}
              </span>
              )
            </li>
            <li
              onClick={() => setNavLink("rejected")}
              className={navLink === "rejected" ? "active" : "all"}
            >
              Rejected(
              <span>
                {schoolsData?.rejected && schoolsData?.rejected.length}
              </span>
              )
            </li>
          </TableNavList>
          {navLink === "all" ? (
            <AdminStudentTable
              schools={schools}
              setSchools={setSchools}
              setSchoolsData={setSchoolsData}
            />
          ) : (
            <AdminStudentTable
              schools={schoolsData[navLink]}
              setSchools={setSchools}
              setSchoolsData={setSchoolsData}
            />
          )}
        </Container>
      )}
    </div>
  );
};

export default AdminDashboard;

const Container = styled.div`
  width: 90%;
  margin: auto;
  @media only screen and (max-width: 688px) {
    width: 500px;
  }
`;
const TableNavList = styled.ul`
  margin-top: 20px;
  li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
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
  @media only screen and (max-width: 688px) {
    margin-left: 20px;
    width: 500px;
  }
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 62px;
  color: #0e3746;
  padding: 30px 0px 10px 0px;
  text-align: center;
`;
const ResNav = styled.div`
  @media only screen and (max-width: 688px) {
    width: 620px;
  }
`;
