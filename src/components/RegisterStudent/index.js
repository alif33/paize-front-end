import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isEmptyObj } from '../../__lib__/helpers/Validator';
import { setAuthInfo } from '../../store/students/actions';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { students } = useSelector(state=>state);
    const { auth } = students;
    const { firstName, 
            lastName, 
            email, 
            password, 
            confirmPassword } = auth;

    const onSubmit = e =>{
        // if(isEmptyObj(auth))
        // {
            console.log("Not okay");
        // }else{
            navigate('/join/school-information');
        // }
        // dispatch(setAuth(data));
    };

    console.log(students);

    return (
        <Container>
            <From onSubmit={handleSubmit(onSubmit)}>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            // name="firstName"
                            {...register("firstName", {
                                required: "Password requird",
                            })}
                            placeholder="First Name"
                            onChange={ e=>dispatch(setAuthInfo(e)) } 
                            value={ firstName }
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
                                required: "Password requird",
                            })}
                            placeholder="Last Name"
                            onChange={ e=>dispatch(setAuthInfo(e)) } 
                            value={ lastName }
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
                                required: "Password requird",
                            })}
                            placeholder="Email"
                            onChange={ e=>dispatch(setAuthInfo(e)) } 
                            value={ email }
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
                                required: "Password requird",
                            })}
                            placeholder="Password"
                            onChange={ e=>dispatch(setAuthInfo(e)) } 
                            value={ password }
                        />
                        { errors.password && <span>Password is required</span> }
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/lock.svg' style={{ width: "30px"}} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            {...register("password", {
                                required: "Password requird",
                            })}
                            // name="confirmPassword" 
                            placeholder="Confirm Password "
                            // onChange={ e=>dispatch(setAuthInfo(e)) } 
                            defaultValue = { confirmPassword }
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

