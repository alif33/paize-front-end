import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPaymentInfo } from '../../store/users/actions';
import { isEmptyObj } from '../../__lib__/helpers/Validator';
import { postData } from '../../__lib__/helpers/HttpService';

const PaymentInfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector(state=>state);
    const { auth, schoolInfo, paymentInfo } = users;
    const {  bankName, routingNumber, accountName, accountNumber } = paymentInfo;

    const handleSubmit = e =>{
        e.preventDefault();
        if(isEmptyObj(paymentInfo))
        {
            console.log("Not okay");
        }else{
          postData('/enroll', {...auth, ...schoolInfo, ...paymentInfo})
          .then(res=>{
            if (res.sucess) {
              navigate('/registered');
            }
          })
        }

    };

    return (
        <Container>
            <From onSubmit={handleSubmit}>
                <div className="inputsConatiner">
                    <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                          name="bankName"
                          placeholder="Name of Bank"
                          value={ bankName }
                          onChange={ e=>dispatch(setPaymentInfo(e)) } 
                            // {...register("bankName", { required: true })}
                        />
                        {/* {errors.bankName && <span>bankName is required</span>} */}
                    </div>
                </div>

                <div className="inputsConatiner">
                    <img src='/img/icon/bank.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                          name="routingNumber"
                          placeholder="Routing Number"
                          value={ routingNumber }
                          onChange={ e=>dispatch(setPaymentInfo(e)) } 
                            // {...register("routingNumber", { required: true })}
                        />
                        {/* {errors.routingNumber && <span>routingNumber is required</span>} */}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                          name="accountName"
                          placeholder="Name of Account"
                          value={ accountName }
                          onChange={ e=>dispatch(setPaymentInfo(e)) } 
                            // {...register("accountName", { required: true })}
                        />
                        {/* {errors.accountName && <span>accountName is required</span>} */}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/document.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                          name="accountNumber"
                          placeholder="Account Number"
                          value={ accountNumber }
                          onChange={ e=>dispatch(setPaymentInfo(e)) } 
                            // {...register("accountNumber", { required: true })}
                        />
                        {/* {errors.accountNumber && <span>accountNumber is required</span>} */}
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
  //background-color: green;
  height: 75vh;
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
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
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
font-weight: 600;
font-size: 22px;
line-height: 39px;
color: #FFFFFF;
border: none;
margin: 10px 0;
`;
const Button2 = styled(Button)`
background: #fff;
color: #2291F1;
border: 2px solid #2291F1;
`;