import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table/Index';

const SellingItem = () => {
    return (
        <div>
            <Navbar />
            <Title>
                <h3>Needs</h3>
                <Button>
                    <img src="/img/icon/trash-icon.png" alt="" />
                    <Link to="/">Add New</Link>
                </Button>
            </Title>
            <Table />
        </div>
    );
};

export default SellingItem;

const Title = styled.div`
width: 95%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
h3{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 41px;
line-height: 62px;
color: #0E3746;
margin-top: 10px;
margin-bottom: 10px;
}
`;
const Button = styled.div`
display: flex;
align-items: center;
img{    margin-right: 35px;}
a{background: rgba(34, 145, 241, 0.14);
border-radius: 5px;font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: #2291F1;
text-decoration: none;
padding: 12px 24px;
}
`;
