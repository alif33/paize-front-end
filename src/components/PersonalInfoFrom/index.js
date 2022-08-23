import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const PersonalInfoForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <From onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                        value="Alex"
                            {...register("bankName", { required: true })}
                        />
                        {errors.bankName && <span>bankName is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                        value="Jones"
                            {...register("bankName", { required: true })}
                        />
                        {errors.bankName && <span>bankName is required</span>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="inputsConatiner">
                    <img src='/img/icon/mail.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                        value="AlexJones@gmail.com"
                            {...register("bankName", { required: true })}
                        />
                        {errors.bankName && <span>bankName is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/contact.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                        value="+1234567890"
                            {...register("bankName", { required: true })}
                        />
                        {errors.bankName && <span>bankName is required</span>}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button>Update</Button>
            </div>
        </From>
    );
};

export default PersonalInfoForm;
const From = styled.form`
    border-top: 1px solid #DADDE1;
    margin-top: 19px;
    padding-top: 36px;
.row{
    display: grid;
    grid-template-columns: 48% 48%;
    column-gap: 4%;
}

.inputsConatiner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
  .inputsConatiner span{
    color: red;
  }
  
  .inputDiv {
    width: 88%;
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
  .inputDiv input:focus{
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }
`;

const Button = styled.button`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 44px;
    background: #2291F1;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 5px 0;
    border: none;
    width: 50% !important;
    margin: auto;
    margin-top: 30px;
`;