import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';


function App() {
  return (
    
    <div className="page">
      <div className="App">
        <BrowserRouter>
          <div>Header</div>
          <br />

          <Navbar
            fixed="top"
            expand="lg"
            collapseOnSelect
            className="navbar-custom"
          >
            <Container>
              <Navbar.Brand as={Link} to="/home" className="brand"><h1>van-maaren.nl</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link as={Link} to="/Home" className="nav-item">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/About" className="nav-item">
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Page3" element={<Page3 />} />
            <Route path="/Page4" element={<Page4 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>  );
  }
  export default App;


