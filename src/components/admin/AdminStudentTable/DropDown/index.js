import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { useSelector } from 'react-redux';
import { getData, updateData } from '../../../../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import { sortByStatus } from '../../../../__lib__/helpers/Filter';

const DropDown = ({ _id, setSchools, setSchoolsData }) => {

    const { admin } = useSelector(state=>state);
    const { auth } = admin;

    const handleStatus = __s__ =>{
        updateData(`/admin/permission?_id=${_id}&status=${__s__}`, {}, auth.token)
            .then(res=>{
                if(res.success){
                    toast.success(`${res.message}`);
                    getData("/schools")
                    .then(res=>{
                        setSchools(res);
                        setSchoolsData(sortByStatus(res));
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }
            })
    }

    return (
        <Popup
            trigger={<Button>Pending <img src="/img/icon/arrow-down.png" alt="" /></Button>}
            position="bottom right "
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false}
        >

            {close =>
                <DropDownMenu onClick={close}>
                    <div onClick={ ()=>handleStatus("Approved") } className="menu-item"> Approved</div>
                    <div onClick={ ()=>handleStatus("Rejected") } className="menu-item"> Rejected</div>
                </DropDownMenu>
            }

        </Popup>
    );
};

export default DropDown;


const Button = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 30px;
color: #2291F1;
background: rgba(34, 145, 241, 0.14);
border: none;
padding: 5px 23px;
    margin-top: 13px;
    cursor: pointer;
img{
    width: 9px;
}

.active img{ 

}
`;

const DropDownMenu = styled.div`
background: #FFFFFF;
border: 1px solid #DADDE1;
border-radius: 5px;
text-align: center;
.menu-item{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #0E3746;
border-bottom: 1px solid #DADDE1;
padding: 15px 0;
cursor: pointer;
}
.menu-item:last-child{
    border-bottom: none;
}

`;