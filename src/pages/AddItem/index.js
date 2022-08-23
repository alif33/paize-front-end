import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const AddItem = () => {
    return (
        <Container>
            <div>
                <img src="/img/icon/box.png" alt="" />
                <h1>
                    You don’t have any item, click add new item button
                    to add item.
                </h1>
            </div>
            <Link to="/selling-item">Add New Item</Link>
        </Container>
    );
};

export default AddItem;

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
font-size: 28px;
    line-height: 36px;
margin: auto;
width: 56%;
text-align: center;
}
img{
    width: 110px;
    margin-bottom: 30px;
}
a{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 39px;
    color: #FFFFFF;
    background: #2291F1;
    border-radius: 5px;
    border: none;
    width: 28%;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    padding: 6px 0;
}

`;