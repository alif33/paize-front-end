import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeLeftChild = () => {
  return (
    <Container>
      <div className="">
        <div className="bigNeedsDiv">
          <div style={{ display: "flex" }}>
            <h1 className="needsText">Big</h1>
            <h1
              className="needsText"
              style={{ color: "#2291F1", marginLeft: "10px" }}
            >
              Needs
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <h1
              className="needsText leftMargin"
              style={{ color: "#2291F1", marginRight: "10px" }}
            >
              Small
            </h1>
            <h1 className="needsText">payments</h1>
          </div>
        </div>
      </div>
      <div className="detailTextConatiner">
        <h6 className="detailText">
          Meet the needs of students from your school through small payments
        </h6>
      </div>
      <div className="regButtons">


      </div>
      <BtnDiv>
        <Link to="/enroll"
          className="active"
        >
          <h3>Enroll School</h3>
          <h4>(for school admins)</h4>
        </Link>

        <Link to="/join"

        >
          <h3 >Join your School</h3>
          <h4>(for school alumni)</h4>
        </Link>
      </BtnDiv>
    </Container>
  );
};

export default HomeLeftChild;


const Container = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
  .headingTextContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .bigNeedsDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0 0 0;
  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    font-weight: 700 !important;
  }
  .rightDiv {
    height: 61%;
    width: 13.3%;
    border-radius: 50%;
    margin-right: 3%;
    display: flex;
    align-items: center;
    background-color: skyblue;
  }
  .detailTextConatiner {
    width: 70%;
  }
  .detailText {
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 27px;
    line-height: 40px;
    color: rgba(14,55,70,0.4);
    margin: 0px 0;
    margin-bottom: 48px;
    margin-top: 22px;
  }
  .needsText {
    font-size: 50px;
    margin-inline: 5px;
    margin: 0px;
    color: #0e3746;
  }
  .leftMargin {
    margin-left: 3%;
  }
  .donatedText {
    font-size: 15px;
    font-family: "Poppins";
  }
  .enrollText {
    font-size: 20px;
    font-family: "Poppins";
    font-weight: 500;
  }
  .text {
    font-size: 17px;
    font-weight: 500;
    font-family: "Poppins";
  }
  .whiteText {
    color: white;
  }
  .blueText {
    color: #2291f1;
  }
  @media screen and (max-width: 750px) {
    .needsText {
      font-size: 40px;
    }
    .donatedText {
      font-size: 10px;
    }
  }
`;

const BtnDiv = styled.div`

  width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    a{
      text-decoration: none;
      border: 2px solid #2291F1;
border-radius: 5px;
display:inline-block;
padding: 10px 19px;
    margin-right: 42px;
color: #2291F1;
transition: all .4s ease-in-out;
width: 250px;

    }
    a h3{
      font-family: 'Poppins';
font-style: normal;
font-weight: 400;
    font-size: 23px;
    line-height: 23px;
margin: 0;
    }
    a h4{font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 26px;

margin: 0;

}

a:hover{
  background:  #2291F1;
  color: #fff;
}
a.active{
  background:  #2291F1;
  color: #fff;
}
a.active:hover{
  background:  #fff;
  color: #2291F1;
}


`;