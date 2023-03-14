import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  width: 1400px;
  justify-content: space-between;
`;


const Left = styled.div`
flex: 1;

`;

const Title = styled.h1`
font-size: 74px;
`;


const Right = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
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
 width: 120px;
 padding: 10px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`;

const who = () => {
  return <Section>
    <Container>

      <Left>{/*3d image*/}  </Left>

      <Right>
        <Title>Think outside the square space</Title>
        <WhatWedo>
          <Line src="./img/line.png" alt="line"/>
          <Subtitle> Who we Are</Subtitle>
        </WhatWedo>
        <Desc>a creative group of designers and developers with a passion for the arts</Desc>
        <Button>See our works</Button>
        </Right>

    </Container>
  </Section>;
};

export default who;
