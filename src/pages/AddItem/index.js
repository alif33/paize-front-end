import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const AddItem = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <div>
                    <img src="/img/icon/box.png" alt="" />
                    <h1>
                        You don’t have any item, click add new item button
                        to add item.
                    </h1>
                </div>
                <Link to="/contact">Add New Item</Link>
            </Container>
        </div>
    );
};

export default AddItem;

const Container = styled.div`

text-align: center;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60vh;
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
width: 40%;
cursor: pointer;
text-decoration: none;
display: inline-block;
    padding: 6px 0;
/* margin-top: 128px !important; */
}

`;