import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


const AdminLoginCard = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
    };

    return (
        <Container>

            <From onSubmit={handleSubmit(onSubmit)}>
                <div className="inputsConatiner">
                    <img src='/img/icon/mail.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className={errors.email ? "inputDiv active" : "inputDiv "}>
                        <input
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>Email is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/lock.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className={errors.password ? "inputDiv active" : "inputDiv "}>
                        <input
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>Password is required</span>}
                    </div>
                </div>

                <CheckBox>

                    <div className="form-check active">

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
                    Next
                </Button>

            </From>
        </Container>
    );
};

export default AdminLoginCard;



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

input{
    cursor: pointer;
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
font-weight: 500;
    font-size: 22px;
    line-height: 39px;
    color: #FFFFFF;
    border: none;
    margin: 10px 0;
    padding: 5px 0;
    margin-top: 100px;
`;

