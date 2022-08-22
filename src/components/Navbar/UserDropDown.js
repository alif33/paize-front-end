import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const UserDropDown = () => {
    return (
        <Popup
            trigger={<Button> <img className="user-icon" src="/img/icon/user-image.png" alt="" /> <img className="down-icon" src="/img/icon/drop-down.svg" alt="" /></Button>}
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
                    <div className="menu-item"> <img src="/img/icon/settings.svg" alt="" /> Settings</div>
                    <div className="menu-item"> <img src="/img/icon/log-out.svg" alt="" /> Logout</div>
                </DropDownMenu>
            }

        </Popup>
    );
};

export default UserDropDown;

const Button = styled.button`
    border: none;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
.user-icon{
    border-radius: 50%;
    height: 50px;
    width: 50px;
}
.down-icon{
    height: 14px;
    width: 14px;
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
display: flex;
    justify-content: center;
    align-items: center;
}
.menu-item:last-child{
    border-bottom: none;
}

img{
    margin-right: 10px;
}

`;