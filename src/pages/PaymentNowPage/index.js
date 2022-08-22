import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardDetails from '../../components/CardDetails';
import CardForm from '../../components/CardForm';
import Navbar from '../../components/Navbar';
import PaymentForm from '../../components/PaymentForm';

const PaymentNowPage = () => {
    return (
        <>
            <Navbar />
            <Container>

                <Title>
                    <h3>Payment Details</h3> <Link to="/" ><img src="/img/icon/close.png" alt="" /></Link>
                </Title>

                <PaymentNowCard>
                    <PaymentForm />
                    <CardDetails />
                </PaymentNowCard>
            </Container>
        </>
    );
};

export default PaymentNowPage;

const Container = styled.div`
      margin: auto;
    width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 62px;
    color: #0E3746;
    margin: 0;
    text-transform: capitalize;
    margin: 8px 0;
}
img{}

`;

const PaymentNowCard = styled.div`
display: grid;
width: 80%;
margin: auto;
grid-template-columns: 70% 30%;
column-gap: 5%;
`;
