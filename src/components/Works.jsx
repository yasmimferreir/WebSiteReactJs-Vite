import React, { useState } from "react";
import styled from "styled-components";
import Developer from "./Developer";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Ilustration",
  "Product design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
`;

const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
  flex: 1;
`;

const List = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;


  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ff6700;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }


  &:hover{
    ::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
           width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("web design")

  return (
    <Section>
      <Container>
        <Left>
          <List>
            { data.map((item) => (
              <ListItem key={ item } text={ item } onClick={ () => setWork(item) }>
                { item }
              </ListItem>
            )) }
          </List>
        </Left>
        <Right>
          { work === "web design" ? (<WebDesign />) : work === "Developer" ? (<Developer />) : (<ProductDesign />) }
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
