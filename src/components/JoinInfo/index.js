import React from 'react';
import styled from 'styled-components';

const JoinInfo = () => {
    return (
        <Container>

            {/* <From onSubmit={handleSubmit}> */}
            <From>

                <div className="inputsConatiner">
                    <img src='/img/icon/school.svg'
                        style={{ width: "30px" }}
                        className="ledtIcon"
                        alt=""
                    />

                    <div className="inputDiv">
                        <input
                            name="schoolName"
                            placeholder="School Name"
                        // value={ schoolName }
                        // onChange={ e=>dispatch(setSchoolInfo(e)) } 
                        // {...register("schoolName", { required: true })}
                        />
                        {/* {errors.schoolName && <span>School Name is required</span>} */}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/graduate.svg' className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            name="relation"
                            placeholder="Graduation Year"
                        // value={ relation }
                        // onChange={ e=>dispatch(setSchoolInfo(e)) } 
                        // {...register("schoolName", { required: true })}
                        />
                        {/* {errors.schoolName && <span>School Name is required</span>} */}
                    </div>
                </div>
                <div className="inputsConatiner">
                    <img src='/img/icon/contact.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
                    />
                    <div className="inputDiv">
                        <input
                            name="phoneNumber"
                            placeholder="Phone Number"
                        // value={ phoneNumber }
                        // onChange={ e=>dispatch(setSchoolInfo(e)) } 
                        // {...register("phoneNumber", { required: true })}
                        />
                        {/* {errors.phoneNumber && <span>phoneNumber is required</span>} */}
                    </div>
                </div>



                <Button type="submit">
                    Next
                </Button>
                <Button2
                    // onClick={ ()=>navigate(-1) }
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
