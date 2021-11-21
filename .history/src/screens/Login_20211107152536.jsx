import React, { useEffect, useState } from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import app from "../firebase/firebase";
const auth = getAuth(app);


export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    if (isRegister) {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } else {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    }
  };
  return (
    <Container>
      <Stack gap={3}>
        <h1>{isRegister ? "Sign Up" : "Sign In"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isRegister ? "Sign Up" : "Sign In"}
          </Button>
        </Form>

        <Button variant="danger" type="submit" onClick = {()=> signInWithRedirect(auth, GoogleAuthProvider)}>
          Google
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Do you have an account? Sign In"
            : "You don't have an account? Sign Up"}
        </Button>
      </Stack>
    </Container>
  );
}
