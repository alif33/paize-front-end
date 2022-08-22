import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const AddNewStudent = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Title>
                    Add New Item
                </Title>

                <Form>
                    <InputConatiner>
                        <label htmlFor="">Item  <span>*</span></label>
                        <input type="text" />
                    </InputConatiner>
                    <InputConatiner>
                        <label htmlFor="">Student Name  <span>*</span></label>
                        <input type="text" />
                    </InputConatiner>
                    <InputConatiner>
                        <label htmlFor="">cost <span>*</span></label>
                        <input type="text" />
                    </InputConatiner>

                    <UploadButton>
                        <p>Upload student image, size between 220*220 to 2000*2000px.</p>
                        <input type="file"
                            accept="image/*" />
                        <img src="/img/icon/upload-icon.png" alt="" />
                    </UploadButton>

                    <UploadButton>
                        <p>Upload Product image, size between 220*220 to 2000*2000px.</p>
                        <input type="file"
                            accept="image/*" />
                        <img src="/img/icon/upload-icon.png" alt="" />
                    </UploadButton>
                    <FormSubmit>
                        <Button>Submit</Button>
                    </FormSubmit>
                </Form>

            </Container>
        </>
    );
};

export default AddNewStudent;


const Container = styled.div`
width: 92%;
margin: auto;

`;

const Title = styled.h3`

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 41px;
line-height: 62px;
color: #0E3746;
margin: 0;`;


const Form = styled.form`
width: 50%;
margin: auto;`;

const InputConatiner = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;

label{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
letter-spacing: -0.02em;
color: #0E3746;
}
label span{
    color: red;
}
input{
    background: rgba(218, 221, 225, 0.4);
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 30px;
letter-spacing: -0.02em;
color: #0E3746;
width: 70%;
border: none;
padding: 5px 30px;
}
input:focus{
    outline: none;
}

`;

const UploadButton = styled.div`
    border: 4px solid rgba(218,221,225,0.4);
    padding: 10px 28px;
position: relative;
margin-top: 30px;
cursor: pointer;

p{font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
letter-spacing: -0.02em;
color: rgba(14, 55, 70, 0.4);}
input{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
}
img{

    height: 50px;
    width: 180px;
    margin-top: 15px;

}

`;
const FormSubmit = styled.div`
text-align: right;
`;
const Button = styled.button`
background: #2291F1;
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44px;
color: #FFFFFF;
border: none;
    padding: 2px 27px;
    margin-top: 22px;
`;

