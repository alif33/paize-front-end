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
  const [updateNeeds, setUpdateNeeds] = useState();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({
    studentImage: "",
    itemImage: "",
  });

  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  
  const { users } = useSelector((state) => state);
  const { __u__ } = users;
  // const { handleSubmit, control, setValue } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  useEffect(() => {
    __getData(`/item?_id=${id}`, __u__.token)
      .then((res) => {
        setUpdateNeeds(res);
        console.log("getData", res);
        setLoading(false);
        // setUpdateNeeds(res);
        setValue("itemName", res.itemName);
        setValue("studentName", res.studentName);
        setValue("cost", res.cost);
        setValue("description", res.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const ImageHandler = (file, field) => {
    if (file.length > 0) {
      let ready = {};
      ready[`${field}`] = false;
      setImages({
        ...images,
        ...ready,
      });

      const formData = new FormData();
      formData.append("image", file[0]);
      authPost("/upload", formData, __u__.token)
        .then((res) => {
          console.log("ImageHandler", res);
          if (res.success) {
            const { secure_url } = res.image;
            let uploaded = {};
            uploaded[`${field}`] = secure_url;
            setImages({
              ...images,
              ...uploaded,
            });
          }
        })
        .catch((err) => {
          console.log("ImageHandler-formData", err);
        });
    }
  };

  const onSubmit = (data) => {
    let _data = data;
    if(images.itemImage.length>0){
      _data.itemImage = images.itemImage
    }
    if(images.studentImage.length>0){
      _data.studentImage = images.studentImage
    }
    // console.log("form-data", data);
    setDisable(true);

    updateData(
      `/edit-item?_id=${id}`,
      _data,
      __u__.token
    ).then((res) => {
      console.log("updateData", res);
      setDisable(false);

      if (res.success) {
        toast.success(`${res.message}`);
        reset();
        navigate("/items");
      }
    });
  };

console.log(images);

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
              {...register("description", {
                required: true,
              })}
            ></textarea>
          </TextArae>
          <UploadButton className={errors.studentImage ? "upload-active" : ""}>
            <p>Upload student image, size between 220*220 to 2000*2000px.</p>
            <input
              type="file"
              onChange={(e) => ImageHandler(e.target.files, "studentImage")}
              accept="image/*"
            />
            <div className="productImage absolute flex justify-center items-center gap-2">
              <img src="/img/icon/upload-icon.png" alt="" />

              <img
                className="productImg"
                src={
                  images.studentImage.length > 0
                    ? images?.studentImage
                    : updateNeeds?.studentImage
                }
              />
            </div>
            {errors.studentImage && <span>student image is required</span>}
          </UploadButton>

          <UploadButton className={errors.productImage ? "upload-active" : ""}>
            <p>Upload Product image, size between 220*220 to 2000*2000px.</p>
            <input
              type="file"
              onChange={(e) => ImageHandler(e.target.files, "itemImage")}
              accept="image/*"
            />
            <div className="productImage absolute flex justify-center items-center gap-2">
              <img src="/img/icon/upload-icon.png" alt="" />

              <img
                className="productImg"
                src={
                  images.itemImage.length > 0
                    ? images?.itemImage
                    : updateNeeds?.itemImage
                }
              />
            </div>
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

  .productImage {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .productImg {
    border: none;
    height: 100px;
    width: 200px;
  }
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
  @media only screen and (max-width: 688px) {
    padding: 0;
    padding-left: 50px;
  }
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
  @media only screen and (max-width: 688px) {
    width: 100%;
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
    font-weight: 500;
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
    font-weight: 500;
    font-size: 17px;
    border: 1px solid rgba(218, 221, 225, 0.4);
    padding-top: 5px;
    padding-left: 10px;
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
