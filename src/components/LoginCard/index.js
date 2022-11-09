import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../../__lib__/helpers/HttpService';
import { logedIn } from '../../store/users/actions';
import { toast, Toaster } from 'react-hot-toast';
import MailIcon from '../../svg/MailIcon';
import LockIcon from '../../svg/LockIocn';
import AlumniIcon from '../../svg/AlumniIcon';
import SchoolIcon2 from '../../svg/SchoolIcon2';


const LoginCard = () => {
    const [disable, setDisable] = useState(false);
    const [check, setCheck] = useState({
        student: false,
        author: false
    });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector(state => state);

    const onSubmit = data => {
        setDisable(true);
        postData(`/${data.radioCheck}/signin`, data)
            .then(res => {
                console.log(res);
                setDisable(false);
                if (res.success) {
                    const { token, info, role, status } = res;
                    if (status === "REJECTED") {
                        toast.error("Account is restricted");
                    } else {
                        dispatch(logedIn({
                            token,
                            info,
                            role,
                            status
                        }))
                        if (role === "AUTHOR") {
                            navigate("/school");
                        }
                        if (role === "STUDENT") {
                            navigate("/student");
                        }
                    }

                }
                if(res.invalid){
                    toast.error(`${res.message}`);
                }
            })
            .catch(err => {
                setDisable(false);
            })
    };

    return (
        <Container>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <From onSubmit={handleSubmit(onSubmit)}>
                <div className="inputsConatiner">
                    <MailIcon />
                    <div className={errors.email ? "inputDiv active" : "inputDiv "}>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>Email is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <LockIcon />
                    <div className={errors.password ? "inputDiv active" : "inputDiv "}>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>Password is required</span>}
                    </div>
                </div>

                <CheckBox>

                    <div className={`form-check ${errors.radioCheck && "danger"} ${check.student && "active"}`}>
                        <input
                            id="flexRadioDefault1"
                            className="form-check-input"
                            type="radio"
                            value="student"
                            {...register("radioCheck", {
                                required: true
                            })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <AlumniIcon danger={errors.radioCheck} color={check.student ? "#2291F1" : "#9f9f9f"} />
                            Alumni
                        </label>
                    </div>
                    <div className={`form-check ${errors.radioCheck && "danger"} ${check.author && "active"}`}>
                        <input
                            id="flexRadioDefault2"
                            className="form-check-input"
                            type="radio"
                            value="author"
                            {...register("radioCheck", {
                                onChange: (e) => {
                                    if(e.target.value==="author"){
                                        setCheck({
                                            ...check,
                                            author: true,
                                            student: false
                                        });
                                    }else{
                                        setCheck({
                                            ...check,
                                            student: true,
                                            author: false
                                        });
                                    }
                                },
                                required: true
                            })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <SchoolIcon2 danger={errors.radioCheck} color={check.author ? "#2291F1" : "#9f9f9f"} />
                            School
                        </label>
                    </div>

                </CheckBox>

                

                <Button
                    type="submit"
                    disabled={disable}
                >
                    Next
                </Button>

            </From>
        </Container>
    );
};

export default LoginCard;



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
    margin: 35px 0;
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

const CheckBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
cursor: pointer;

label{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    color: rgba(14, 55, 70, 0.4);
    cursor: pointer;
    
}
.active label{color: #2291F1;}
.danger label{color: #dc3545;}

input{
    cursor: pointer;
    height: 22px;
    width: 22px;
}
svg{margin: 0 10px;
    width: 19px;}

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
    margin-top: 100px;
`;


