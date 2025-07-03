import { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/logo-no-gradient.png"
import { theme } from "../styles/theme";


function Navbar() {
    const location = useLocation();
    const [ menuOpen, setMenuOpen ] = useState(false);
    return ( 
        <Container>
            <Burger onClick = {() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Burger>
            <Logo alt = "Carlos Alvarez Logo" src = {logoImg} />
            <NavLinks $menuOpen = {menuOpen}>
                <Link isActive = {location.hash === ''} to = "/" onClick = {() => setMenuOpen(false)}>Home</Link>
                <Link isActive = {location.hash === '#services'} to = "#services" onClick = {() => setMenuOpen(false)}>Services</Link>
                <Link isActive = {location.hash === '#about'} to = "#about" onClick = {() => setMenuOpen(false)}>About Me</Link>
                <Link isActive = {location.hash === '#projects'} to = "#projects" onClick = {() => setMenuOpen(false)}>Projects</Link>
                <Link isActive = {location.hash === '#contact'} to = "#contact" onClick = {() => setMenuOpen(false)}>Contact Me</Link>
            </NavLinks>
            <Button>Hire Me</Button>
        </Container>
     );
}

export default Navbar;

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    padding: 1rem 5rem;
    position: fixed;
    left: 0;

`;

const Logo = styled.img`
    width: 200px;
    height: 125px;

    @media(max-width: 600px) {
        width: 150px;
        height: 75px;
    }
`;

const Burger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
        width: 25px;
        height: 3px;
        background: ${theme.colors.text};
        border-radius: 5px;
    }

    @media(max-width: 1000px) {
        display: flex;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;

    @media(max-width: 1270px) {
        gap: 2.5rem;
    }

    @media(max-width: 1000px) {
        position:absolute;
        top: 100px;
        left: 0;
        flex-direction: column;
        background: white;
        gap: .5rem;
        padding: 1rem;
        border-radius: 0 0 10px 0;
        display: ${({ $menuOpen }) => ($menuOpen ? "flex" : "none")};

    }
    
`;

const Link = styled(NavLink).withConfig({
    shouldForwardProp: prop => prop !== "isActive"
})`
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ isActive })  => (isActive ? theme.colors.primary : theme.colors.text)};
    
    &:hover {
        color: ${theme.colors.primary}
    }

    @media(max-width: 1270px) {
        font-size: 1rem;
    }
`;

export const Button = styled.button`
    padding: 0.7rem 2.5rem;
    border-radius: 10px;
    border: none;
    font-size: .9rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

     @media(max-width: 385px) {
        padding: 0.7rem 1.5rem;
    }
`;