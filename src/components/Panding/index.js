import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Panding = () => {
    return (
        <Container>
            <div>
                <img src="/img/icon/panding.png" alt="" />
                <h1>
                    Your enrollment is pending verification
                </h1>
            </div>
            <Link to="/contact">Contact Us</Link>
        </Container>
    );
};

export default Panding;

const Container = styled.div`

text-align: center;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70vh;
    div{
        width: 100%;
    }
h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 60px;
text-align: center;
color: rgba(14, 55, 70, 0.4);
width: 70%;
margin: auto;
text-align: center;
}
img{
    width: 100px;
    margin-top: 20px;
    margin-bottom: 15px;
}
a{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 39px;
color: #FFFFFF;
    background: #2291F1;
border-radius: 5px;
border: none;
width: 30%;
cursor: pointer;
text-decoration: none;
display: inline-block;
    padding: 6px 0;
/* margin-top: 128px !important; */
}

`;