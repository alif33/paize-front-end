import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { authPost } from '../../__lib__/helpers/HttpService';
import { useSelector } from 'react-redux';


const AddNewItem = () => {
    const [disable, setDisable] = useState(false);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { users } = useSelector(state => state);
    const { __u__ } = users;

    const onSubmit = data => {
        setDisable(true);

        const _data = new FormData();
        _data.append("itemName", data.itemName);
        _data.append("studentName", data.studentName);
        _data.append("cost", data.cost);
        _data.append("images", data.productImage[0]);
        _data.append("images", data.studentImage[0]);

        authPost("/add-item", _data, __u__.token)
            .then(res => {
                setDisable(false);
                if (res.success) {
                    reset();
                    toast.success(`${res.message}`);
                }
            })

    };

    return (
        <>
            <Navbar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Container>
                <Title>
                    Add New Item
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputConatiner>
                        <label htmlFor="">Item  <span>*</span></label>
                        <div className={errors.itemName ? "inputDiv active" : "inputDiv "}>
                            <input
                                {...register("itemName", {
                                    required: true
                                })}
                            // placeholder="Item Name"
                            />
                            {errors.itemName && <span>Item Name is required</span>}
                        </div>

                    </InputConatiner>
                    <InputConatiner>
                        <label htmlFor="">Student Name  <span>*</span></label>
                        <div className={errors.studentName ? "inputDiv active" : "inputDiv "}>
                            <input
                                {...register("studentName", {
                                    required: true
                                })}
                            // placeholder="Student Name"
                            />
                            {errors.studentName && <span>Student Name is required</span>}
                        </div>
                    </InputConatiner>
                    <InputConatiner>
                        <label htmlFor="">cost <span>*</span></label>
                        <div className={errors.cost ? "inputDiv active" : "inputDiv "}>
                            <input
                                {...register("cost", {
                                    required: true
                                })}
                            // placeholder="Cost"
                            />
                            {errors.cost && <span>Cost is required</span>}
                        </div>
                    </InputConatiner>

                    <UploadButton
                        className={errors.studentImage ? "upload-active" : ""}
                    >
                        <p>Upload student image, size between 220*220 to 2000*2000px.</p>
                        <input type="file"
                            {...register("studentImage", {
                                required: true
                            })}
                            accept="image/*" />
                        <img src="/img/icon/upload-icon.png" alt="" />
                        {errors.studentImage && <span>student image is required</span>}
                    </UploadButton>

                    <UploadButton

                        className={errors.productImage ? "upload-active" : ""}
                    >
                        <p>Upload Product image, size between 220*220 to 2000*2000px.</p>
                        <input type="file"
                            {...register("productImage", {
                                required: true
                            })}
                            accept="image/*" />
                        <img src="/img/icon/upload-icon.png" alt="" />
                        {errors.studentImage && <span>student image is required</span>}
                    </UploadButton>

                    <FormSubmit>
                        <Button disabled={disable}>Submit</Button>
                    </FormSubmit>
                </Form>

            </Container>
        </>
    );
};

export default AddNewItem;


const Container = styled.div`
width: 75%;
margin: auto;
padding-bottom: 40px;

`;

const Title = styled.h3`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 51px;
    color: #0E3746;
    margin: 0;
    margin-top: 12px;
    padding: 30px 0px 10px 150px;
    `;


const Form = styled.form`
width: 65%;
margin: auto;

.upload-active{
    border: 4px solid red;
}
.upload-active p{
    color: red;
}
.upload-active span{
    color: red;
    display: block;
    text-transform: capitalize;
    position: absolute;
    left: 50%;
    bottom: -15px;
    background: #fff;
    transform: translate(-50%, 0);
    padding: 0 17px;
    font-size: 17px;
}
`;

const InputConatiner = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;

label{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 30px;
letter-spacing: -0.02em;
color: #0E3746;
}
label span{
    color: red;
}
/* input{
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
} */

.inputDiv {
    width: 70%;
    position: relative;
}
.inputDiv input{
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: rgba(218, 221, 225, 0.4);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    border: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .inputDiv.active input{
    border: 1px solid red;
    background: #fff;
  }
  .inputDiv span{
    color: red;
    position: absolute;
    bottom: -12px;
    left: 22px;
    background: #fff;
    padding: 0 6px;
  }
  .inputDiv input:focus{
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }

`;

const UploadButton = styled.div`
    border: 1px solid rgba(218,221,225,0.4);
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
    cursor: pointer;
`;

