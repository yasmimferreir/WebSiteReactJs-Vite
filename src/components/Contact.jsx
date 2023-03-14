import React from "react";
import styled from "styled-components";

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
justify-content: center;
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
  
`;

const Input = styled.input`
  
`;

const TextArea = styled.textarea`
  
`;

const Button = styled.button`
  
`;


const Right = styled.div`
flex: 1;
 
`;


const Contact = () => {
  return <Section>
    <Container>
      <Left>
      <Form>
        <Title>Contact us</Title>
        <Input placeholder="Name" />
        <Input placeholder="E-mail" />
        <TextArea  placeholder="white your message"/>
        <Button>send</Button>
        </Form>
      </Left>

      <Right></Right>

    </Container>
  </Section>;
};

export default Contact;
