import React, { useState } from "react";
import { Container, Form, FormGroup, FormControl, Button } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState(""); // Cambio de 'lastname' a 'email'
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => { // Cambio de 'handleLastnameChange' a 'handleEmailChange'
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = { email, password }; // Cambio de 'lastname' a 'email'
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("Usuario registrado exitosamente");
      } else {
        console.error("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Registro de Usuario</h2>
      <Form onSubmit={handleSubmit} className="mt-3">
        <FormGroup>
          <Form.Label>Email:</Form.Label>
          <FormControl
            type="email"
            value={email}
            onChange={handleEmailChange} // Cambio de 'handleLastnameChange' a 'handleEmailChange'
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Contraseña:</Form.Label>
          <FormControl
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
}

export default Register;
