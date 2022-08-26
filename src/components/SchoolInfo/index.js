import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSchoolInfo } from '../../store/users/actions';
import { useForm } from 'react-hook-form';

const SchoolInfo = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state);
    const { schoolInfo } = users;
    const { schoolName, schoolAddress, principleName, relation, phoneNumber, } = schoolInfo;
    const onSubmit = data => {
        dispatch(setSchoolInfo(data));
        navigate('/enroll/payment-information');
    }

    return (
        <Container>
            <From onSubmit={handleSubmit(onSubmit)}>
                <div className="inputsConatiner">
                    <img src='/img/icon/school.svg'
                        style={{ width: "30px" }}
                        className="ledtIcon"
                        alt=""
                    />
                    <div className={errors.schoolName ? "inputDiv active" : "inputDiv "} >
                        <input
                            {...register("schoolName", {
                                required: true
                            })}
                            placeholder="School Name"
                            defaultValue={schoolName}
                        />
                        {errors.schoolName && <span>School Name is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/school.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className={errors.schoolAddress ? "inputDiv active" : "inputDiv "}>
                        <input
                            {...register("schoolAddress", {
                                required: true
                            })}
                            placeholder="School Address"
                            defaultValue={schoolAddress}
                        />
                        {errors.schoolAddress && <span>School Address is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className={errors.principleName ? "inputDiv active" : "inputDiv "}>
                        <input
                            {...register("principleName", {
                                required: true
                            })}
                            placeholder="Name of Principal"
                            defaultValue={principleName}
                        />
                        {errors.principleName && <span>Principle Name is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    />
                    <div className={errors.relation ? "inputDiv active" : "inputDiv "}>
                        <input
                            {...register("relation", {
                                required: true
                            })}
                            placeholder="Relation to School"
                            defaultValue={relation}
                        />
                        {errors.relation && <span>School Name is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/contact.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className={errors.phoneNumber ? "inputDiv active" : "inputDiv "}>
                        <input
                            {...register("phoneNumber", {
                                required: true
                            })}
                            placeholder="Phone Number"
                            defaultValue={phoneNumber}
                        />
                        {errors.phoneNumber && <span>Phone Number is required</span>}
                    </div>
                </div>

                <Button type="submit">
                    Next
                </Button>
                <Button2
                    onClick={() => navigate(-1)}
                    type="button">
                    Back
                </Button2>

            </From>
        </Container>
    );
};

export default SchoolInfo;

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
