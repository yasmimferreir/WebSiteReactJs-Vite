import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 50px;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #ff6700;
  outline: 0;

  :focus {
    color: white;
    font-weight: bold;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;

  border-radius: 5px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #ff6700;
  outline: 0;

  :focus {
    color: white;
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: #ff6700;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact us</Title>
            <Input placeholder="Name" />
            <Input placeholder="E-mail" />
            <TextArea placeholder="white your message" rows={7}/>
            <Button>send</Button>
          </Form>
        </Left>

 <Map/>
        <Right>
        
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
