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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          distinctio est qui officia, vel dicta ipsum voluptatum laboriosam modi
          excepturi. Eius expedita doloribus natus neque! Numquam nisi laborum
          eaque suscipit, mollitia blanditiis, quibusdam voluptatem commodi
          debitis pariatur optio, dignissimos nam sunt sequi modi facilis
          quidem? Adipisci iusto, temporibus dicta quo nostrum commodi nihil
          ipsum. Nihil, ratione quos. Nostrum perferendis repellendus expedita
          asperiores? Inventore nisi culpa at nobis cupiditate odit voluptates
          ipsum quae iure minus natus id eveniet facere ea voluptatibus
          repellendus, deserunt optio? Officia perspiciatis aperiam eos. Maiores
          et dolorem facere qui quaerat voluptates, dicta molestias odio ipsam
          modi mollitia nam, iste cupiditate libero, vel veniam? Repellendus
          illo deleniti magni nesciunt nobis? Odio commodi earum minima ut
          laboriosam, facilis ullam ipsam saepe assumenda eveniet veritatis in
          quam harum esse aspernatur, obcaecati nam reiciendis dolorum iste qui.
          Tempore dolorum tenetur veniam ut, tempora dignissimos qui molestias
          eos perspiciatis architecto velit repellat explicabo quasi odit alias
          provident modi rerum corporis in! Dolore harum doloremque tempore
          aspernatur voluptatibus, soluta quasi eos quis officiis expedita eius
          esse culpa voluptates eum veniam, magnam vero facere ex similique a
          placeat! Molestias sed nihil praesentium quo libero officia expedita
          sint possimus. Quod quae praesentium porro maiores perspiciatis.
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
