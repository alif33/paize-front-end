import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, postData } from "../../__lib__/helpers/HttpService";
import { logedIn } from "../../store/users/actions";
import { Toaster, toast } from "react-hot-toast";
import { clearData } from "../../store/students/actions";
import SchoolIcon from "../../svg/SchoolIcon";
import GraduateIcon from "../../svg/GraduateIcon";
import ContactIcon from "../../svg/ContactIcon/indes";

const JoinInfo = () => {
  const [disable, setDisable] = useState(false);
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();
  const { students } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getData("/public/schools").then((res) => {
      setSchools(res);
    });
  }, []);

  const onSubmit = (data) => {
    postData("/join", { ...students.auth, ...data })
      .then((res) => {
        setDisable(false);
        if (res.success) {
          const { token, info, role, status } = res;
          dispatch(clearData());
          dispatch(logedIn({ token, info, role, status }));
          navigate("/registered");
        } else {
          const { response } = res;
          toast.error(`${response.data.message}`);
        }
      })
      .catch((err) => {});
    // console.log(data);
  };
  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <From onSubmit={handleSubmit(onSubmit)}>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/school.svg'
            style={{ width: "30px" }}
            className="ledtIcon"
            alt=""
          /> */}
          <SchoolIcon />
          <div className={errors.schoolName ? "inputDiv active" : "inputDiv "}>
            <select
              style={{ padding: "10px 15px" }}
              {...register("_school", {
                required: true,
              })}
            >
              <option>School Name</option>
              {schools.length > 0 &&
                schools.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.schoolName}
                  </option>
                ))}
            </select>
            {errors._school && <span>School Name is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/graduate.svg' className="ledtIcon" alt="" /> */}
          <GraduateIcon />
          <div
            className={errors.graduationYear ? "inputDiv active" : "inputDiv "}
          >
            <input
              {...register("graduationYear", {
                required: true,
              })}
              placeholder="Graduation Year"
            />
            {errors.graduationYear && <span>Graduation Year is required</span>}
          </div>
        </div>
        <div className="inputsConatiner">
          {/* <img src='/img/icon/contact.svg' style={{ width: "30px" }} className="ledtIcon" alt=""
          /> */}
          <ContactIcon />
          <div className={errors.phoneNumber ? "inputDiv active" : "inputDiv "}>
            <input
              {...register("phoneNumber", {
                required: true,
              })}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <span>Phone Number is required</span>}
          </div>
        </div>

        <Button disabled={disable} type="submit">
          Next
        </Button>
      </From>
    </Container>
  );
};

export default JoinInfo;

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
  .inputsConatiner span {
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

  .inputDiv input,
  .inputDiv select {
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid #2291f1;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.76);
    width: 100%;
    box-sizing: border-box;
  }
  .inputDiv.active input,
  .inputDiv.active select {
    border: 1px solid red;
    background: #fff;
  }
  .inputDiv input:focus,
  .inputDiv select:focus {
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }
  @media only screen and (max-width: 688px) {
    width: 360px;
    .inputDiv.active select {
      width: 50px;
    }
  }
`;

const From = styled.form`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const Button = styled.button`
  width: 100%;
  background: #2291f1;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 39px;
  color: #ffffff;
  border: none;
  margin: 10px 0;
  padding: 5px 0;
`;
const Button2 = styled(Button)`
  background: #fff;
  color: #2291f1;
  border: 2px solid #2291f1;
`;
