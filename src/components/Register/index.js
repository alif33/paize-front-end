import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../store/users/actions';
import { isEmptyObj } from '../../__lib__/helpers/Validator';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { users } = useSelector(state=>state);
    const { auth } = users;
    const { firstName, lastName, email, password, confirmPassword } = auth;
    const dispatch = useDispatch();

    const onSubmit = data =>{
        dispatch(setAuth(data));
        navigate('/enroll/school-information');
    };

    console.log(users);

    return (
        <Container>
            <From onSubmit={ handleSubmit(onSubmit) }>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            {...register("firstName", {
                                required: true,
                            })}
                            placeholder="First Name"
                            // onChange={ e=>dispatch(setAuth(e)) } 
                            defaultValue={ firstName }
                        />
                        { errors.firstName && <span>First Name is required</span> }
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            // name="lastName"
                            {...register("lastName", {
                                required: true,
                            })}
                            placeholder="Last Name"
                            // onChange={ e=>dispatch(setAuth(e)) } 
                            defaultValue={ lastName }
                        />
                        { errors.lastName && <span>Last Name is required</span> }
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/mail.svg' style={{ width: "30px"}} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            // name="email"
                            {...register("email", {
                                required: true,
                            })}
                            placeholder="Email"
                            // onChange={ e=>dispatch(setAuth(e)) } 
                            defaultValue={ email }
                        />
                        { errors.email && <span>Email is required</span> }
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/lock.svg' style={{ width: "30px"}} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            // name="password"
                            {...register("password", {
                                required: true,
                            })}
                            placeholder="Password"
                            // onChange={ e=>dispatch(setAuth(e)) } 
                            defaultValue={ password }
                        />
                        { errors.password && <span>Password is required</span> }
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/lock.svg' style={{ width: "30px"}} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            // name="confirmPassword" 
                            {...register("confirmPassword", {
                                required: true,
                            })}
                            placeholder="Confirm Password "
                            // onChange={ e=>dispatch(setAuth(e)) } 
                            defaultValue={ confirmPassword }
                        />
                        { errors.confirmPassword && <span>Confirm Password is required</span> }
                    </div>
                </div>

                <Button type="submit">
                    Next
                </Button>
                <Button2 
                    type="button"
                    onClick={ ()=>navigate(-1) }
                >
                    Back
                </Button2>

            </From>
        </Container>
    );
};

export default Register;



const Container = styled.div`
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

