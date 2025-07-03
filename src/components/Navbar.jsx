import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/logo-no-gradient.png"
import { theme } from "../styles/theme";

function Navbar() {
    const location = useLocation();

    return ( 
        <Container>
            <img alt = "Carlos Alvarez Logo" width = "200" height = "125" src = {logoImg} />
            <NavLinks>
                <Link isActive={location.pathname === '/'} to = "/">Home</Link>
                <Link isActive={location.pathname === '/services'} to = "/services">Services</Link>
                <Link isActive={location.pathname === '/about'} to = "/about">About Me</Link>
                <Link isActive={location.pathname === '/projects'} to = "/projects">Projects</Link>
                <Link isActive={location.pathname === '/contact'} to = "/contact">Contact Me</Link>
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
    height: auto;
    padding: 1rem 0;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
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
`;

const Button = styled.button`
    padding: 0.7rem 2.5rem;
    border-radius: 10px;
    border: none;
    font-size: .9rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
`;