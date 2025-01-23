import React, { useState, useEffect } from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { Link } from 'react-scroll'; // Importar Link de react-scroll
import logo from './img/Diseño sin título (5).png';
import navIcon1 from './img/instagram (3).png';
import navIcon2 from './img/facebook (2).png';
import navIcon3 from './img/whatsapp (1).png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Velas</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Esencias</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Jabones</Nav.Link>
                        <Nav.Link href="#footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footer')}>Nosotros</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
     
                            <a href="https://www.instagram.com/joyasdaiia/"><img src={navIcon1} alt="Instagram" /></a>
                            <a href="https://www.facebook.com/daiiaduar/"><img src={navIcon2} alt="Facebook" /></a>
                            <a href="https://www.whatsapp.com/catalog/5491156630620/?app_absent=0"><img src={navIcon3} alt="Whatsapp" /></a>
                        </div>
                        <Link to="contact" smooth={true} duration={500}>
                          <button className="vvd"><span>Contactos🩶</span></button>
                        </Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

