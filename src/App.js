import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";
import ScrollToAnchor from "./components/ScrollToAnchor";


const App = () => {
  return (
    <Container>
      <Navbar />
      <ScrollToAnchor />
      <Home />

      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1500px;
  padding: 0 5rem;
  margin: 0 auto;

  @media(max-width: 600px) {
      padding: 0 2.5rem;
  }
`;