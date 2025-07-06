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
import ScrollSpy from "./components/ScrollSpy";
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <Container>
      <Navbar />
      <ScrollSpy />
      <ScrollToAnchor />
      <div style = {{height: "160px"}}></div>

      <Home />
      <Services /> 
      <About />
      <Projects />
      <Contact /> 

      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#333',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
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