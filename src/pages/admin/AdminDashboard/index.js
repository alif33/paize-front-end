import React from 'react';
import styled from 'styled-components';
import AdminStudentTable from '../../../components/admin/AdminStudentTable';
import AdminNavbar from '../../../components/admin/AdminNavbar'

const AdminDashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Title>School DashBoard</Title>

                <TableNavList>
                    <li className="active" >All(<span>0</span>)</li>
                    <li>Pending(<span>0</span>)</li>
                    <li>Approved(<span>0</span>)</li>
                    <li>Rejected(<span>0</span>)</li>
                </TableNavList>

                <AdminStudentTable />
            </Container>
        </div>
    );
};

export default AdminDashboard;

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
font-size: 18px;
    line-height: 23px;
letter-spacing: -0.02em;
color: rgba(14, 55, 70, 0.4);
border-right: 2px solid rgba(14, 55, 70, 0.4);
display: inline-block;
margin-right: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
    
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
font-size: 41px;
line-height: 62px;
color: #0E3746;`;