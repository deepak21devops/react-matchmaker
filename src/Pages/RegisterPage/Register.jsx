import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const Register = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const RegisterContainer = styled.div`
    background-color: #72195a;
    padding: 20px;
  `;
  const RegTitle = styled.h1`
    margin-bottom: 20px;
    color: whitesmoke;
  `;
  const RegForm = styled.form`
    padding: 20px;
  `;
  const RegDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `;
  const Label = styled.label`
    margin-right: 20px;
    color: whitesmoke;
    font-weight: 700;
  `;
  const FormInput = styled.input`
    padding: 10px;
    width: 200px;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgray;
    font-size: 18px;
  `;
  const FormButton = styled.button`
    height: 40px;
    width: 100px;
    cursor: pointer;
    background-color: #3d0c11;
    border: none;
    font-size: 15px;
    color: whitesmoke;
    font-weight: bold;
    transition: all 0.5s ease;
    :hover {
      background-color: #88d498;
    }
  `;
  const LoginSpan = styled.span`
    color: whitesmoke;
  `;
  const Login = styled.span`
    color: #ffd23f;
    cursor: pointer;
    font-weight: bold;
  `;
  return (
    <>
      <Register>
        <RegisterContainer>
          <RegTitle>REGISTRATION PAGE</RegTitle>
          <RegForm>
            <RegDiv>
              <Label>First Name:</Label>
              <FormInput type="text" placeholder="First Name"></FormInput>
            </RegDiv>
            <RegDiv>
              <Label>Last Name:</Label>
              <FormInput type="text" placeholder="Last Name"></FormInput>
            </RegDiv>
            <RegDiv>
              <Label>Email:</Label>
              <FormInput
                type="email"
                placeholder="deep123@gmail.com"
              ></FormInput>
            </RegDiv>
            <RegDiv>
              <Label>Password:</Label>
              <FormInput type="password" placeholder=""></FormInput>
            </RegDiv>
            <RegDiv>
              <Label>Retype Password:</Label>
              <FormInput type="password" placeholder=""></FormInput>
            </RegDiv>
            <FormButton>Register</FormButton>
          </RegForm>
          <LoginSpan>
            Already Registered?
            <Link to="/login">
              <Login>Login Here</Login>
            </Link>
          </LoginSpan>
        </RegisterContainer>
      </Register>
    </>
  );
};

export default Register;
