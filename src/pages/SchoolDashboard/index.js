import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Panding from "../../components/Panding";
import { useDispatch, useSelector } from "react-redux";
import StudentTable from "../../components/StudentTable";
import { __getData } from "../../__lib__/helpers/HttpService";
import { sortByStatus } from "../../__lib__/helpers/Filter";
import toast, { Toaster } from "react-hot-toast";
import { logedIn } from "../../store/users/actions";

const SchoolDashboard = () => {
  const [navLink, setNavLink] = useState("all");
  const [students, setStudents] = useState();
  const [studentsData, setStudentsData] = useState();
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { __u__ } = users;

  useEffect(() => {
    if (__u__.status === "APPROVED") {
      __getData("/students", __u__.token)
        .then((res) => {
          setStudents(res);
          setStudentsData(sortByStatus(res));
        })
        .catch((err) => {});
    }
    __getData("/author/refresh", __u__.token).then((res) => {
      if (res.success) {
        console.log(res, "00");
        const { token, info, role, status } = res;
        if (status === "REJECTED") {
          toast.error("Account is restricted");
        } else {
          dispatch(
            logedIn({
              token,
              info,
              role,
              status,
            })
          );
        }
      }
    });
  }, []);

  console.log(users.__u__);
  console.log("studentsData", studentsData);
  return (
    <div>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      {__u__.status === "PENDING" && <Panding />}

      {__u__.status === "APPROVED" && (
        <Container>
          <Title>School Dashboard</Title>
          <TableNavList>
            <li
              onClick={() => setNavLink("all")}
              className={navLink === "all" ? "active" : "all"}
            >
              All(<span>{students && students.length}</span>)
            </li>
            <li
              onClick={() => setNavLink("pending")}
              className={navLink === "pending" ? "active" : "all"}
            >
              Pending(
              <span>
                {studentsData?.pending && studentsData.pending.length}
              </span>
              )
            </li>
            <li
              onClick={() => setNavLink("approved")}
              className={navLink === "approved" ? "active" : "all"}
            >
              Approved(
              <span>
                {studentsData?.approved && studentsData.approved.length}
              </span>
              )
            </li>
            <li
              onClick={() => setNavLink("rejected")}
              className={navLink === "rejected" ? "active" : "all"}
            >
              Rejected(
              <span>
                {studentsData?.rejected && studentsData.rejected.length}
              </span>
              )
            </li>
          </TableNavList>
          {navLink === "all" ? (
            <StudentTable
              students={students}
              setStudents={setStudents}
              setStudentsData={setStudentsData}
            />
          ) : (
            <StudentTable
              students={studentsData[navLink]}
              setStudents={setStudents}
              setStudentsData={setStudentsData}
            />
          )}
        </Container>
      )}
    </div>
  );
};

export default SchoolDashboard;

const Container = styled.div`
  width: 92%;
  margin: auto;
`;
const TableNavList = styled.ul`
  margin-top: 20px;
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
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 62px;
  color: #0e3746;
  padding-top: 15px;
`;
