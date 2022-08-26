import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const Registered = () => {
    return (
        <div>
        <Navbar />
        <Container>
            <h1>
                Thank you for registering. You will be notified within one
                business day when your school is enrolled.
            </h1>
            <Link to="/school" >Done</Link>
        </Container>
    </div>
    );
};

export default Registered;

const Container = styled.div`

text-align: center;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60vh;
h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 40px;
text-align: center;
color: rgba(14, 55, 70, 0.4);
width: 60%;
margin: auto;
text-align: center;
}
a{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 39px;
color: #FFFFFF;
    background: #2291F1;
border-radius: 4px;
border: none;
width: 30%;
cursor: pointer;
text-decoration: none;
display: inline-block;
    padding: 6px 0;
/* margin-top: 128px !important; */
}

`;