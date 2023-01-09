import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h3>About Us</h3>
        <p>
        Education is key to upward social mobility. There are millions of kids around the world who are struggling to find the means to go to schools. Paize is founded on the principle that every child deserves quality education and there is so much the communities can do to help them.

Every person feels connected to their schools and Paize is a platform that connects Alumni to their school purely for paying for the needs of the students such as text books, study materials, and scholarships. Every donation goes straight to the school for the specific need to which it has been contributed. Donors will be provided with the proof once a particular need has been fulfilled. 

With the help of school authorities and the alumni of the school. we can ensure that every child has the tools they need to succeed.

        </p>
      </Container>
    </>
  );
};

export default About;
const Container = styled.div`
  h3 {
    font-family: "Poppins";
    font-style: normal;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    color: #0e3746;
    text-decoration: none;
    text-align: center;
    margin-right: 40px;
    padding: 20px 0;
  }
  p {
    text-align: justify;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    padding: 0 40px;
    line-height: 30px;
  }
`;
