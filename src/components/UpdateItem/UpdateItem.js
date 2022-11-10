import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import {
  authPost,
  updateData,
  __getData,
} from "../../__lib__/helpers/HttpService";
import { useSelector } from "react-redux";

const UpdateItem = () => {
  const { id } = useParams();
  const [disable, setDisable] = useState(false);
  const [updateNeeds, setUpdateNeeds] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  const navigate = useNavigate();

  useEffect(() => {
    __getData(`/item?_id=${id}`, __u__.token)
      .then((res) => {
        setLoading(false);
        setUpdateNeeds(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (data) => {
    setDisable(true);
    console.log("updateFromDate", data);

    const _data = new FormData();
    _data.append("itemName", data.itemName);
    _data.append("studentName", data.studentName);
    _data.append("cost", data.cost);
    _data.append("description", data.description);
    // _data.append("images", data.productImage[0]);
    // _data.append("images", data.studentImage[0]);

    updateData(`/edit-item?_id=${id}`, _data, __u__.token).then((res) => {
      setDisable(false);
      console.log("update Data", res);
      if (res.success) {
        toast.success(`${res.message}`);
        reset();
        navigate("/items");
      }
    });
  };
  console.log("updateNeeds", updateNeeds);
  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <Title>Update Item</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputConatiner>
            <label htmlFor="">
              Item <span>*</span>
            </label>
            <div className={errors.itemName ? "inputDiv active" : "inputDiv "}>
              <input
                defaultValue={updateNeeds?.itemName}
                {...register("itemName", {
                  required: true,
                })}
              />
              {errors.itemName && <span>Item Name is required</span>}
            </div>
          </InputConatiner>
          <InputConatiner>
            <label htmlFor="">
              Student Name <span>*</span>
            </label>
            <div
              className={errors.studentName ? "inputDiv active" : "inputDiv "}
            >
              <input
                defaultValue={updateNeeds?.studentName}
                {...register("studentName", {
                  required: true,
                })}
              />
              {errors.studentName && <span>Student Name is required</span>}
            </div>
          </InputConatiner>
          <InputConatiner>
            <label htmlFor="">
              Cost <span>*</span>
            </label>
            <div className={errors.cost ? "inputDiv active" : "inputDiv "}>
              <input
                defaultValue={updateNeeds?.cost}
                {...register("cost", {
                  required: true,
                })}
              />
              {errors.cost && <span>Cost is required</span>}
            </div>
          </InputConatiner>
          <TextArae>
            <h5>Description</h5>
            <textarea
              rows={3}
              defaultValue={updateNeeds?.description}
              {...register("description", {
                required: true,
              })}
            ></textarea>
          </TextArae>
          <UploadButton className={errors.studentImage ? "upload-active" : ""}>
            <p>Upload student image, size between 220*220 to 2000*2000px.</p>
            <input
              type="file"
              {...register("studentImage", {
                // required: true,
              })}
              accept="image/*"
            />
            <img src="/img/icon/upload-icon.png" alt="" />
            {errors.studentImage && <span>student image is required</span>}
          </UploadButton>

          <UploadButton className={errors.productImage ? "upload-active" : ""}>
            <p>Upload Product image, size between 220*220 to 2000*2000px.</p>
            <input
              type="file"
              {...register("productImage", {
                // required: true,
              })}
              accept="image/*"
            />
            <img src="/img/icon/upload-icon.png" alt="" />
            {errors.studentImage && <span>student image is required</span>}
          </UploadButton>

          <FormSubmit>
            <Button disabled={disable}>Submit</Button>
          </FormSubmit>
        </Form>
      </Container>
    </>
  );
};

export default UpdateItem;

const Container = styled.div`
  width: 75%;
  margin: auto;
  padding-bottom: 40px;
`;

const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 51px;
  color: #0e3746;
  margin: 0;
  margin-top: 12px;
  padding: 25px 0px 10px 150px;
`;

const Form = styled.form`
  width: 65%;
  margin: auto;

  .upload-active {
    border: 4px solid red;
  }
  .upload-active p {
    color: red;
  }
  .upload-active span {
    color: red;
    display: block;
    text-transform: capitalize;
    position: absolute;
    left: 50%;
    bottom: -15px;
    background: #fff;
    transform: translate(-50%, 0);
    padding: 0 17px;
    font-size: 17px;
  }
`;

const InputConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #0e3746;
  }
  label span {
    color: red;
  }
  .inputDiv {
    width: 70%;
    position: relative;
  }
  .inputDiv input {
    padding-inline: 20px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 36px;
    color: #111;
    padding: 5px 20px;
    border: 1px solid rgba(218, 221, 225, 0.4);
    width: 100%;
    box-sizing: border-box;
  }
  .inputDiv.active input {
    border: 1px solid red;
    background: #fff;
  }
  .inputDiv span {
    color: red;
    position: absolute;
    bottom: -12px;
    left: 22px;
    background: #fff;
    padding: 0 6px;
  }
  .inputDiv input:focus {
    outline: none;
  }
  .inputDiv::placeholder {
    color: rgba(14, 55, 70, 0.4);
    opacity: 1;
  }
`;

const TextArae = styled.div`
  padding: 20px 0px;
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    padding: 10px 0px;
  }
  textarea {
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    border: 1px solid rgba(218, 221, 225, 0.4);
  }
  textarea:focus {
    outline: none;
  }
`;

const UploadButton = styled.div`
  border: 1px solid rgba(218, 221, 225, 0.4);
  padding: 10px 28px;
  position: relative;
  margin-top: 30px;
  cursor: pointer;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: rgba(14, 55, 70, 0.4);
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  img {
    height: 50px;
    width: 180px;
    margin-top: 15px;
  }
`;
const FormSubmit = styled.div`
  text-align: right;
`;
const Button = styled.button`
  background: #2291f1;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  color: #ffffff;
  border: none;
  padding: 2px 27px;
  margin-top: 22px;
  cursor: pointer;
`;
