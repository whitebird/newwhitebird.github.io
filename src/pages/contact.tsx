import React from 'react';
import { config, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { AnimatedBox } from '../elements';
import SEO from '../components/SEO';

const Form = styled.form``;

const Group = styled.div`
  width: 100%;
  margin: 15px 0;
`;

const Label = styled.label`
  width: 100%;
  margin-right: 0;
  text-align: left;
  @media screen and (min-width: 900px) {
    width: 140px;
    margin-right: 10px;
    text-align: right;
    margin-top: 8px;
  }
  display: inline-block;
  vertical-align: top;
`;
const Input = styled.input`
  width: 100%;
  @media screen and (min-width: 900px) {
    width: 60%;
    padding: 7px;
    margin: 0px;
  }
  box-sizing: border-box;
  border: 1px solid black;
  outline: none;
`;
const Message = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  @media screen and (min-width: 900px) {
    width: 60%;
    padding: 7px;
    margin: 0px;
  }
  height: 10em;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1em;
  @media all and (min-width: 900px) {
    margin-left: 150px;
  }

  @media not all and (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: none;
  padding: 20px 70px;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  border: 3px solid #000;
  transition: all 0.2s;
  &:hover {
    color: white;
    background: black;
  }
`;

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout>
      <SEO
        title="Contact | Sebastiaan Jansen"
        desc="Contact Sebbastiaan Jansen for questions or potential collaborations."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>You talking to me?</h1>
        <p>
          Fill in this form if you wish to contact me and I'll get back to you
          as soon as possible. You can also send an email to{' '}
          <a href="mailto:contact@sebastiaanjansen.be">
            contact@sebastiaanjansen.be
          </a>
          .
        </p>
        <Form action="https://formspree.io/xdoenavy" method="POST">
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <Group>
            <Label for="_name">Your name:</Label>
            <Input type="text" name="_name" />
          </Group>
          <Group>
            <Label for="_replyto">Your email:</Label>
            <Input type="email" name="_replyto" />
          </Group>
          <Group>
            <Label for="message">Your message:</Label>
            <Message name="message" />
          </Group>
          <ButtonWrapper>
            <Button type="submit">Send</Button>
          </ButtonWrapper>
        </Form>
        <p>
          The form is sent with{' '}
          <a href="https://formspree.io/" title="Formspree website">
            Formspree
          </a>
          , you can read their privacy policy{' '}
          <a
            href="https://formspree.io/legal/privacy-policy"
            title="Privacy policy Formspree"
          >
            here
          </a>
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default Contact;
