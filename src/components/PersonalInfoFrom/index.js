import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import { logedIn } from '../../store/users/actions';
import UserIcon from '../../svg/UserIcon';
import MailIcon from '../../svg/MailIcon';
import ContactIcon from '../../svg/ContactIcon/indes';

const PersonalInfoForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [disable, setDisable] = useState(false);
    const dispatch = useDispatch();
    const { users } = useSelector(state => state);
    const { __u__ } = users;

    const onSubmit = data => {
        setDisable(true);
        const _data = new FormData();
        _data.append("firstName", data.firstName);
        _data.append("lastName", data.lastName);
        _data.append("phoneNumber", data.phoneNumber);
        // _data.append("images", data.productImage[0]);
        // _data.append("images", data.studentImage[0]);
        updateData(`/${__u__.role === "AUTHOR" ? "author" : "student"}/profile`, _data, __u__.token)
            .then(res => {
                setDisable(false);
                if (res.success) {
                    toast.success(`${res.message}`);
                    const { token, info, role, status } = res;

                    dispatch(logedIn({
                        token,
                        info,
                        role,
                        status
                    }))

                }
            })
            .catch(err => {
                setDisable(false);
            })
    };
    return (

        <From onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="inputsConatiner">
                    {/* <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    /> */}
<UserIcon/>
                    <div className={errors.firstName ? "inputDiv active" : "inputDiv "}>
                        <input
                            placeholder="First Name"
                            defaultValue={__u__.info?.firstName}
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && <span>First Name is required</span>}
                    </div>
                </div>
                <div className="inputsConatiner">
                    {/* <img src='/img/icon/user.svg' className="ledtIcon" alt=""
                    /> */}
                    <UserIcon />
                    <div className={errors.lastName ? "inputDiv active" : "inputDiv "}>
                        <input
                            placeholder="Last Name"
                            defaultValue={__u__.info?.lastName}
                            {...register("lastName", {
                                required: true
                            })
                            }
                        />
                        {errors.lastName && <span>Last Name is required</span>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="inputsConatiner">
                    {/* <img src='/img/icon/mail.svg' className="ledtIcon" alt=""
                    /> */}
                    <MailIcon/>
                    <div className="inputDiv">
                        <input
                            placeholder="Email"
                            disabled={true}
                            defaultValue={__u__.info?.email}
                        />
                    </div>
                </div>
                <div className="inputsConatiner">
                    {/* <img src='/img/icon/contact.svg' className="ledtIcon" alt=""
                    /> */}
                    <ContactIcon/>
                    <div className={errors.phoneNumber ? "inputDiv active" : "inputDiv "}>
                        <input
                            placeholder="Phone Number"
                            defaultValue={__u__.info?.phoneNumber}
                            {...register("phoneNumber", { required: true })}
                        />
                        {errors.phoneNumber && <span>Phone Number is required</span>}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button disabled={disable}>Update</Button>
            </div>
        </From>
    );
};

export default PersonalInfoForm;

const From = styled.form`
    border-top: 1px solid #DADDE1;
    margin-top: 19px;
    padding-top: 36px;
.row{
    display: grid;
    grid-template-columns: 48% 48%;
    column-gap: 4%;
}

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

const Button = styled.button`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 44px;
    background: #2291F1;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 5px 0;
    border: none;
    width: 50% !important;
    margin: auto;
    margin-top: 30px;
    cursor: pointer;
`;