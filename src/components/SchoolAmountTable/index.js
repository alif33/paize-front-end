import React from 'react';
import styled from 'styled-components';

const SchoolAmountTable = () => {
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
                <tr>
                    <td>
                        <TableImage>
                            <img src="/img/icon/dummy-image.png" alt="" />
                            <h5>Study Table</h5>
                        </TableImage>
                    </td>
                    <td><p>2011</p></td>
                    <td><p>510-241-5439</p></td>
                    <td><p>58$</p></td>
                </tr>
            </tbody>
        </TableContainer>
    );
};

export default SchoolAmountTable;



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
`;


const TableImage = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

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
}

`;
