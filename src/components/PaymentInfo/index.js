import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logedIn } from '../../store/users/actions';
import { postData } from '../../__lib__/helpers/HttpService';
import { useForm } from 'react-hook-form';

const PaymentInfo = () => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector(state=>state);
    const { auth, schoolInfo, paymentInfo } = users;
    const {  bankName, routingNumber, accountName, accountNumber } = paymentInfo;

    const onSubmit = data =>{

      postData('/enroll', {...auth, ...schoolInfo, ...data})
      .then(res=>{
        if (res.success) {
          const { token, info } = res;
          dispatch(logedIn({ token, info }));
        }
      })

    };


    return (
        <Container>
            <From  onSubmit={handleSubmit(onSubmit)}>
                <div className="inputsConatiner">
                    <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
                    />
                    <div  className={errors.bankName ? "inputDiv active" : "inputDiv "}>
                        <input
                          // name="bankName"
                          {...register("bankName", { 
                            required: true 
                          })}
                          placeholder="Name of Bank"
                          defaultValue={ bankName }
                          // onChange={ e=>dispatch(setPaymentInfo(e)) } 
                        />
                        { errors.bankName && <span>bankName is required</span> }
                    </div>
                </div>

                <div className="inputsConatiner">
                    <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
                    />
                    <div  className={errors.routingNumber ? "inputDiv active" : "inputDiv "}>
                        <input
                          // name="routingNumber"
                          {...register("routingNumber", { 
                            required: true 
                          })}
                          placeholder="Routing Number"
                          defaultValue={ routingNumber }
                          // onChange={ e=>dispatch(setPaymentInfo(e)) } 
                        />
                        {errors.routingNumber && <span>routingNumber is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div  className={errors.accountName ? "inputDiv active" : "inputDiv "}>
                        <input
                          // name="accountName"
                          {...register("accountName", { 
                            required: true 
                          })}
                          placeholder="Name of Account"
                          defaultValue={ accountName }
                          // onChange={ e=>dispatch(setPaymentInfo(e)) } 
                        />
                        {errors.accountName && <span>accountName is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/document.svg' className="ledtIcon" alt=""
                    />
                    <div  className={errors.accountNumber ? "inputDiv active" : "inputDiv "}>
                        <input
                          // name="accountNumber"
                          {...register("accountNumber", { 
                            required: true 
                          })}
                          placeholder="Account Number"
                          defaultValue={ accountNumber }
                          // onChange={ e=>dispatch(setPaymentInfo(e)) } 
                        />
                        { errors.accountNumber && <span>accountNumber is required</span> }
                    </div>
                </div>

                <Button type="submit">
                    Next
                </Button>
                <Button2
                  onClick={ ()=>navigate(-1) } 
                  type="button"
                >
                    Back
                </Button2>

            </From>
        </Container>
    );
};

export default PaymentInfo;


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .inputsConatiner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
  .inputsConatiner span{
    color: red;
    position: absolute;
    bottom: -12px;
    left: 22px;
    background: #fff;
    padding: 0 6px;
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }

  .inputDiv {
    width: 88%;
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
  .inputDiv input:focus{
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }
`;

const From = styled.form`
width: 80%;
height: 100%; 
margin: auto;
`;

const Button = styled.button`
width: 100%;
background: #2291F1;
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
    font-size: 22px;
    line-height: 39px;
    color: #FFFFFF;
    border: none;
    margin: 10px 0;
    padding: 5px 0;
`;
const Button2 = styled(Button)`
background: #fff;
color: #2291F1;
border: 2px solid #2291F1;
`;
