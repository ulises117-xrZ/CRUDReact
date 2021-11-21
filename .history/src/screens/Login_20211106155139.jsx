import React, { useEffect, useState } from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";
export default function Login() {
    const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Stack gap={3}>
      <h1>{isRegister ? "Inicia Sesion" : "Registrate"}</h1>
        <Form>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {
                isRegister ? "Registrate" : "Inicia Sesion"
            }
          </Button>
        </Form>

          <Button variant="primary" type="submit">
          Google
          </Button>
          <Button variant="primary" type="submit">
          {isRegister ? "Ya tienes cuenta? Inicia sesion": "No tienes cuenta? Registrate"}
          </Button>
      </Stack>
    </Container>
  );
}
