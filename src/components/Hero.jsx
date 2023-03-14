import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  width: 1400px;
  justify-content: space-between;
`;


const Left = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex: 2;
gap: 20px;
`;

const Title = styled.h1`
font-size: 74px;
`;

const WhatWedo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
color: #ff6700;
`;

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;

const Button = styled.button`
background-color: #ff6700;
 color: white;
 font-weight: 500;
 width: 100px;
 padding: 10px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`;

const Right = styled.div`
position: relative;
flex:3;
`;
const Img = styled.img`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
width: 600px;
height: 600px;
object-fit: contain;
animation: animate 2s infinite ease alternate;


@keyframes animate {
  100%{
    transform: translateY(20px);
  }
  
}

`;

const Hero = () => {
  return <Section>
    <Navbar/>
    <Container>

      <Left>
        <Title>Think. Make. Solve.</Title>
        <WhatWedo>
          <Line src="./img/line.png" alt="line"/>
          <Subtitle> What we do</Subtitle>
        </WhatWedo>
        <Desc>we enjoy creating delightful, human-centered digital experiences</Desc>
        <Button>Learn More</Button>
      </Left>

      <Right>
        <Img src="./img/astro.png" alt="moon" />
      </Right>


    </Container>
  </Section>;
};

export default Hero;
