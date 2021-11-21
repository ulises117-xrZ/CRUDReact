import React, { useState, useEffect } from "react";
import { Stack, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import app from "../firebase/firebase";
import Swal from "sweetalert2";
import { useAuth } from "../Context/authProvider";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export default function Login() {
  const authContext = useAuth();
  const history = useNavigate();
  useEffect(() => {

    return () => {
      setIsRegister(false);
      setEmail(null);
      setPassword(null);
      setError(null);
    };
  }, []);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === null || !password === null) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Fill the blanks",
      });
      return;
    }

    if (isRegister) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        authContext.login(data);
        history("/");
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: e,
        });
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        authContext.login(data);
        setTimeout(()=>{history("/")}, 800);
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: e.code,
        });
      }
    }
    setError(null);
  };

  const logGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    authContext.login(result);

    setTimeout(()=>{history("/")}, 1000);
  };
  return (
    <Container className="p-5">
      <Stack gap={3}>
        <h1>{isRegister ? "Sign Up" : "Sign In"}</h1>
        <Form onSubmit={submitHandler}>
          {error ? <span className="text-danger">{error}</span> : null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {error ? <span className="text-danger">{error}</span> : null}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            {isRegister ? "Sign Up" : "Sign In"}
          </Button>
        </Form>
        <Row>
          <Col>
            <Button variant="warning" type="submit" onClick={ ()=>logGoogle()}>
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
