import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../__lib__/helpers/HttpService';

const JoinInfo = () => {

  const navigate = useNavigate();
  const { students } = useSelector(state=>state);
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>{
    postData('/join', { ...students.auth, ...data })
      .then(res=>{
        console.log(res);
      })
    console.log(data);
  }
    return (
      <Container>
      <From
        onSubmit={ handleSubmit(onSubmit) }
      >
        <div className="inputsConatiner">
          <img src='/img/icon/school.svg'
            style={{ width: "30px" }}
            className="ledtIcon"
            alt=""
          />

          <div className="inputDiv">
            <select 
              {...register("schoolName", { 
                required: true 
              })}
            >
              <option value="63035d46b6b878593b5e8c94">A</option>
              <option value="63035d46b6b878593b5e8c94">B</option>
              <option value="63035d46b6b878593b5e8c94">C</option>
            </select>
            { errors.schoolName && <span>School Name is required</span> }
          </div>
        </div>
        <div className="inputsConatiner">
          <img src='/img/icon/graduate.svg' className="ledtIcon" alt=""
          />
          <div className="inputDiv">
            <input
              {...register("graduationYear", { 
                required: true 
              })}
              placeholder="Graduation Year"
            />
            { errors.graduationYear && <span>Graduation Year is required</span> }
          </div>
        </div>
        <div className="inputsConatiner">
          <img src='/img/icon/contact.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
          />
          <div className="inputDiv">
            <input
              {...register("phoneNumber", { 
                required: true 
              })}
              placeholder="Phone Number"
            />
            { errors.phoneNumber && <span>Phone Number is required</span> }
          </div>
        </div>

        <Button type="submit">
          Next
        </Button>
        <Button2
          onClick={ ()=>navigate(-1) }
          type="button">
          Back
        </Button2>

      </From>
    </Container>
  );
};

export default JoinInfo;


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

 
  .inputDiv input, .inputDiv select{
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
  .inputDiv input:focus, .inputDiv select:focus{
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



