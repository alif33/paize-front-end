import React, { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';
import DropDown from './DropDown';


const StudentTable = ({ students, setStudents, setStudentsData }) => {
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Graduation Year</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>

            {/* <ClipLoader color="#111" loading={true} cssOverride={override} size={150} /> */}

                {
                    students && students.length>0 && students.map((item, index)=>{
                        return(
                        <tr key={ index }>
                            <td>
                                <TableImage>
                                    <img src="/img/icon/dummy-image.png" alt="" />
                                    <h5>{`${item.firstName} ${item.lastName}`}</h5>
                                </TableImage>
                            </td>
                            <td><p>{item.graduationYear}</p></td>
                            <td><p>{item.phoneNumber}</p></td>
                            {/* <td><Button>Pending <img src="/img/icon/arrow-down.png" alt="" /></Button></td> */}
                            { item.status==="PENDING" && <td>
                                <DropDown
                                    _id={ item._id }
                                    setStudents={ setStudents } 
                                    setStudentsData={ setStudentsData }
                                /> 
                            </td>}
                            { item.status==="APPROVED" && <td><Button2>Approved </Button2></td> }
                            { item.status==="REJECTED" && <td><Button3>Rejected</Button3></td> }
                            
                        </tr>
                        )
                    })
                }

                {/* <tr>
                    <td>
                        <TableImage>
                            <img src="/img/icon/dummy-image.png" alt="" />
                            <h5>Study Table</h5>
                        </TableImage>
                    </td>
                    <td><p>2011</p></td>
                    <td><p>510-241-5439</p></td>
                    <td><Button2>Approved </Button2></td>
                </tr>
                <tr>
                    <td>
                        <TableImage>
                            <img src="/img/icon/dummy-image.png" alt="" />
                            <h5>Study Table</h5>
                        </TableImage>
                    </td>
                    <td><p>2011</p></td>
                    <td><p>510-241-5439</p></td>
                    <td><Button3>Rejected</Button3></td>
                </tr> */}
            </tbody>
        </TableContainer>
    );
};

export default StudentTable;


const TableContainer = styled.table`
text-align: center;
width: 100%;
    margin: auto;
    margin-bottom: 1rem;
    background-color: transparent;
    border-collapse: collapse;
thead{   
    background: rgba(34, 145, 241, 0.14);
}
thead  th{
    background: rgba(34, 145, 241, 0.14);
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
letter-spacing: -0.02em;
color: #0E3746;
padding: 10px 0;
}
tbody tr td{
    padding: 0.75rem;
    vertical-align: top;
    border-bottom: 1px solid #dee2e6;
}
tbody tr td p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
color: #0E3746;
display: flex;
justify-content: center;
align-items: center;
height: 100%;    padding: 15px 0;
}
/* tbody tr td span{
height: 100%;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
    line-height: 30px;
    color: #0E3746;
    width: 230px !important;
    display: inline-block;
} */

`;

const TableImage = styled.div`
display: flex;
justify-content: center;
align-items: center;

input{
    width: 25px;
    height: 25px;
}
img{
    width: 62px;
height: 62px;
border-radius: 7px;
}
h5{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
color: #0E3746;
margin-left: 40px;
}

`;

const Button2 = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 30px;
color: #20E300;
background: rgba(32, 227, 0, 0.14);
border: none;
padding: 5px 23px;
    margin-top: 13px;
`;
const Button3 = styled(Button2)`background: rgba(255, 0, 0, 0.14);color: #FF0000;`;