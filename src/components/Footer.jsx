import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logoImg from "../assets/logo-no-gradient.png";

function Footer() {
  return (
    <FooterContainer>
        <Logo alt = "Carlos Alvarez Logo" src = {logoImg} />
        
        <Socials>
            <a href="https://github.com/calvarezberrios" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/calvarezberrios" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="mailto:carlos.alvarezberrio@gmail.com">
                <FaEnvelope />
            </a>
        </Socials>

        <Contact>
            <span><FaEnvelope /> carlos.alvarezberrio@gmail.com</span>
            <span><FaPhoneAlt /> +1 386 801 2743</span>
        </Contact>

        <Bottom>
            <p>© {new Date().getFullYear()} Carlos Alvarez-Berrios. All rights reserved.</p>
        </Bottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
    position: absolute;
    left: 0;
    width: 100%;
    background-color: #1a1b1d;
    color: ${theme.colors.text};
    padding: 2rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

const Logo = styled.img`
    width: 200px;
    height: 125px;

    @media(max-width: 600px) {
        width: 150px;
        height: 75px;
    }
`;


const Socials = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        color: ${theme.colors.text};
        font-size: 2rem;
        transition: color 0.3s ease;

        &:hover {
        color: ${theme.colors.primary};
        }
    }
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media(max-width: 525px) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
    }
`;

const Bottom = styled.div`
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
`;
