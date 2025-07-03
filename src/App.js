import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";


const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/services" element = {<Services />} />
        <Route exact path = "/" element = {<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 0 5rem;
`;