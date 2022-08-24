import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SchoolAmountTable from '../../components/SchoolAmountTable';

const SchoolDashboardAmount = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Title><h3>School DashBoard</h3> <h4>Total Amount
                    1021$</h4></Title>

                    <SchoolAmountTable />
            </Container>
        </div>
    );
};

export default SchoolDashboardAmount;

const Container = styled.div`
width: 92%;
margin: auto;
`;
const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
h3{ 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 51px;
    color: #0E3746;
    margin: 0;
    margin-top: 12px;
}
h4{font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 43px;
color: #2291F1;
}
`;
