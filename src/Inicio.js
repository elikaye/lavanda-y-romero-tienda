import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import './App.css'; // Importar el archivo de estilos

const Inicio = () => {
  return (
    <section className="inicio" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animated animate_fadeIn" : ""}>
                  <span className="tagline">Bienvenidos</span>
                  <h1>A Nuestra Tienda Online</h1>
                  <h3>¡Explora nuestros productos!</h3>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="hero-image">
              {/* Aquí podrías agregar una imagen o un componente de bienvenida */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
