import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import PaymentTable from '../../components/PaymentTable';

const StudentDashboard = () => {
    return (
        <div>
        <Navbar />
        <Container>
            <Title>Needs</Title>
            <PaymentTable />
        </Container>
    </div>
    );
};

export default StudentDashboard;

const Container = styled.div`
width: 92%;
margin: auto;
`;
const Title = styled.h3`
font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 51px;
    color: #0E3746;
    margin: 0;
    margin-top: 12px;
    `;