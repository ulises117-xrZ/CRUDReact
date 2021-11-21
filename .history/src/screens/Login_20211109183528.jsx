import React, { useEffect, useState } from "react";
import { Stack, Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import app from "../firebase/firebase";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();

    if(!email.trim() || !password.trim()){
      alert("porfavor ingresa tus datos");
      setError("Ingresa tus datos porfavor")
      return
    }

    

    if (isRegister) {
    
        const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } else {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        
     
    }
  };
  // console.log(`correoUsuario`, correoUsuario);
  return (
    <Container>
      <Stack gap={3}>
        <h1>{isRegister ? "Sign Up" : "Sign In"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange = {(e)=> setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange = {(e)=> setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="success" type="submit">
            {isRegister ? "Sign Up" : "Sign In"}
          </Button>
        </Form>
        <Row>
          <Col>
            <Button
              variant="warning"
              type="submit"
              onClick={() => signInWithRedirect(auth, googleProvider)}
            >
              Google
            </Button>
          </Col>
         <Col>
         <Button
            variant="dark"
            type="submit"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister
              ? "Do you have an account? Sign In"
              : "You don't have an account? Sign Up"}
          </Button>
         </Col>
        </Row>
      </Stack>
    </Container>
  );
}
