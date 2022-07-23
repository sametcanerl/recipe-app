import React from "react";
import Container, { FormContainer, InputContainer } from "./Register.style";
import { useState } from "react";
import { createUser } from "../../auth/firebase";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(firstName,lastName);
    createUser(email,password,navigate)
  };
  return (
    <Container>
      <FormContainer onSubmit={handleRegister}>
        <InputContainer>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <button type="submit">Login</button>
      </FormContainer>
    </Container>
  );
};

export default Register;
