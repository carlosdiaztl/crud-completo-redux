import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Register = () => {
  return (
    <div className="p-5">
      <h1>Crear una nueva cuenta</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Name" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="Email"  />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label=" Phone number" className="mb-3">
            <Form.Control type="number" placeholder="Celular" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel label="Confirm Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Avatar" className="mb-3">
            <Form.Control type="file" size="sm" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
        </Form.Group>
        
        <Button variant="warning" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
export default Register;
