import React from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input/Input";
import { MdOutlineLock } from "react-icons/md";
import { IoPersonOutline, IoMailOutline } from "react-icons/io5";
import {
  StyledButtonWrapper,
  StyledText,
  StyledInput,
  StyledForm,
} from "./styles";

const Form = () => {
  return (
    <StyledForm>
      <div>
        <StyledText>
          <h1>Get Started</h1>
          <p>Already have an account?</p>
          <a href="">Log In</a>
        </StyledText>
        <StyledButtonWrapper>
          <Button
            color="#FFFFFF"
            fontColor="#000"
            image="src\images\google.png"
            text="sign up"
          />
          <Button
            color=" #4F70B5"
            fontColor="#FFFFFF"
            image="src\images\facebook-4-48.png"
            text="sign up"
          />
        </StyledButtonWrapper>
        <span>Or</span>

        <div>
          <label>Name</label>
          <StyledInput>
            <IoPersonOutline />
            <Input placeholder="John Doe"></Input>
          </StyledInput>
          <label>Email</label>
          <StyledInput>
            <IoMailOutline />
            <Input type="email" placeholder="JohnDoe@gmail.com" />
          </StyledInput>
          <label>Password</label>
          <StyledInput>
            <MdOutlineLock />
            <Input type="password" placeholder="Password" />
          </StyledInput>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
