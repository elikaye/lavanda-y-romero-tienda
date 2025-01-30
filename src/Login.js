import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap"; // Puedes usar react-bootstrap para darle estilo
import { Link } from "react-router-dom"; // Enlace para redirigir a registro si lo necesitas
import "./App.css"; // Estilos

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el login (por ejemplo, haciendo una llamada a la API)
    console.log("Login details:", { email, password });
  };

  return (
    <section className="login">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <div className="form-container">
              <h2>Iniciar sesión</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Iniciar sesión
                </Button>
              </Form>

              <p className="mt-3">
                ¿No tienes cuenta?{" "}
                <Link to="/registro">Regístrate aquí</Link> {/* Redirige a la página de registro */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
