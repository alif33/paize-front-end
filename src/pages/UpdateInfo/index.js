import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import PersonalInfoForm from '../../components/PersonalInfoFrom';

const UpdateInfo = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Title>
                    Settings
                </Title>

                <TapGroup>
                    <Link to="/update-Information" className="active" >Personal Information</Link>
                    <Link to="/payment-details">Payment Details</Link>
                </TapGroup>

                <ProfileSction>
                    <p>Your Avatar</p>
                    <ProfileInfo>
                        <UserImage src="/img/icon/user-avatar.png" alt="" />
                        <NameEmail>
                            <h4>Alex Jones</h4>
                            <p>AlexJones@gmail.com</p>
                        </NameEmail>
                        <UpButton>Upload <input type="file" /> </UpButton>
                    </ProfileInfo>
                </ProfileSction>

                <PersonalInfoForm />
            </Container>
        </>
    );
};

export default UpdateInfo;


const Container = styled.div`
      margin: auto;
    width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 62px;
    color: #0E3746;
    margin: 0;
    text-transform: capitalize;
    margin: 8px 0;
`;

const TapGroup = styled.div`
a{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: rgba(14, 55, 70, 0.4);
    background: #FFFFFF;
border: 2px solid rgba(14, 55, 70, 0.4);
border-radius: 12px;
text-decoration: none;
padding: 8px 18px;
margin-right: 30px;
transition: all .4s ease-in-out;
}
a.active{
    border: 2px solid #2291F1;
    color: #2291F1;
}
a:hover{
    border: 2px solid #2291F1;
    color: #fff;
    background:#2291F1; 
}
`;

const ProfileSction = styled.div`
p{    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 38px;
    color: rgba(14,55,70,0.4);
    margin: 0;
    margin-top: 28px;
}`;
const ProfileInfo = styled.div`
display: flex;
align-items: center;
`;
const UserImage = styled.img`
    width: 85px;
    height: 85px;
    border-radius: 50%;
`;
const NameEmail = styled.div`
margin: 0 20px;
h4{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 25px;
color: #0E3746;
margin: 0;

}
p{font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
color: #2291F1;
margin: 0;
margin-top: 12px;
}
`;
const UpButton = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44px;
background: #2291F1;
border-radius: 12px;
color: #FFFFFF;
width: 180px !important;
    padding: 5px 0;
    border: none;
    position: relative;
    input{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
    }
`;