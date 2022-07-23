import React from "react";
import Container, {
  FormContainer,
  InputContainer,
} from "./Login.style";
import { useState } from "react";
import { SignIn } from "../../auth/firebase";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault()
    SignIn(email,password,navigate)

  }
  return (
    <Container>
      <FormContainer onSubmit={handleLogin}>
        <InputContainer >
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

export default Login;
