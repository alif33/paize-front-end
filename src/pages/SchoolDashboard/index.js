import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Panding from '../../components/Panding';
import { useSelector } from 'react-redux';
import StudentTable from '../../components/StudentTable';

const SchoolDashboard = () => {
    const [NavLink, setNavLink] = useState('all');
    const { users } = useSelector(state=>state);
    const { __u__ } = users;


    console.log(users.__u__);
    return (
        <div>
            <Navbar />
            { __u__.status==="PENDING" && <Panding />}
            {__u__.status==="APPROVED" && <Container>
                <Title>School DashBoard</Title>
                <TableNavList>
                    <li onClick={ () => setNavLink("all") } className={ NavLink === "all" ? "active" : "all" } >All(<span>0</span>)</li>
                    <li onClick={ () => setNavLink("pending") } className={ NavLink === "pending" ? "active" : "all" }>Pending(<span>0</span>)</li>
                    <li onClick={ () => setNavLink("approved") } className={ NavLink === "approved" ? "active" : "all" }>Approved(<span>0</span>)</li>
                    <li onClick={ () => setNavLink("rejected") } className={ NavLink === "rejected" ? "active" : "all" }>Rejected(<span>0</span>)</li>
                </TableNavList>
                <StudentTable />
            </Container>}
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
li{
    font-family: 'Poppins';
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
li:last-child{
    border-right: none;
}
li.active {
    color: #2291F1;
}
`;
const Title = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 62px;
    color: #0E3746;
`;