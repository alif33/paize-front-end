import React from 'react';
import styled from 'styled-components';

const CardDetails = () => {
    return (
      

       <Container>
         <CardDetailsContainer>
            <CardDetail>
                <CardImg>
                    <img src="/img/icon/card-d.png" alt="" />
                    <img src="/img/icon/net.png" alt="" />
                </CardImg>
                <p>Jonathan Micheal</p>
                <CardNumber>
                    <input type="password" value="1234" disabled />
                    <input type="text" value="1234" disabled />
                </CardNumber>
                <Date>
                    <p>09/22</p>
                    <div>
                        <img src="/img/icon/uim_master-card.png" alt="" />
                        <span>Master Card</span>
                    </div>
                </Date>
            </CardDetail>
           
        </CardDetailsContainer>
        <PayAmount>
            <div>
                <span>You have to pay</span>
                <p>980.89 <span> USD</span></p>
            </div>
            <img src="/img/icon/uil-bill.png" alt="" />
        </PayAmount>
       </Container>
    );
};

export default CardDetails;

const Container = styled.div`
margin-top: 52px;
`;

const CardDetailsContainer = styled.div`
background: rgba(34, 145, 241, 0.14);
border-bottom: 1px dashed #2291F1;
border-radius: 0px 0px 34px 34px;
padding: 0px 20px;
padding-bottom: 60px;
position: relative;
height: 290px;
`;
const CardDetail = styled.div`
background: rgba(255, 255, 255, 0.64);
box-shadow: 0px 0px 1px rgba(47, 136, 255, 0.56);
border-radius: 9px;
padding: 13px 17px;
    position: absolute;
    top: -57px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 85%;
p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0E3746;
margin-top: 67px;
}
`;
const CardImg = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const CardNumber = styled.div`
display: flex;
align-items: center;
input{    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #0E3746;
width: 50px;
border: none;
background: transparent;
}
input:focus{
    outline: none;
}
`;
const Date = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
div{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;
}
p{font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0E3746;}
span{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 16px;
color: #0E3746;
}

`;

const PayAmount = styled.div`
background: rgba(34, 145, 241, 0.14);
border-radius: 34px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 20px;
div{}
div span{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: rgba(14, 55, 70, 0.4);
}
div p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
color: #0E3746;
margin-right: 5px;
}
img{}
`;
