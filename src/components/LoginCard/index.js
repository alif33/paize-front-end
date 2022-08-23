import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const LoginCard = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <From onSubmit={handleSubmit(onSubmit)}>

                <div className="inputsConatiner">
                    <img src='/img/icon/mail.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>email is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/lock.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>password is required</span>}
                    </div>
                </div>

                <CheckBox>

                    <div className="form-check">

                        <input className="form-check-input" type="radio" id="flexRadioDefault1"
                            {...register("aluminiCheck", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <img src="/img/icon/alumni.svg" alt="" />
                            Alumini
                        </label>

                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="flexRadioDefault2"
                            {...register("aluminiCheck", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <img src="/img/icon/school.png" alt="" />
                            School
                        </label>
                    </div>

                </CheckBox>

                {errors.aluminiCheck && <span style={{ color: "red" }} >aluminiCheck is required</span>}

                <Button type="submit">
                    Login
                </Button>

            </From>
        </Container>
    );
};

export default LoginCard;



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
    margin: 30px 0;
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

  // .ledtIcon {
  //   border: 2px solid #f0f1f3;
  //   padding: 9px;
  //   border-radius: 5px;
  // }
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
margin-bottom: 100px;
label{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: rgba(14, 55, 70, 0.4)

}
.active label{color: #2291F1;}

input{
    height: 22px;
    width: 22px;
}
img{margin: 0 10px;
    width: 19px;}

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


