import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import SocialButtons from "./SocialButtons";
import { Button } from "./Navbar";
import Profile from "../assets/Subject.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return ( 
        <Container>
            <Intro>
                <p>Hi I am</p>
                <h2 className = "name">Carlos Alvarez-Berrios aka "Mannie"</h2>
                <Title>Full Stack Web Developer</Title>
                <SocialButtons />
                <CallToActions>
                    <Button onClick = {() => navigate("#contact")}>Hire Me</Button>
                    <Button className = "CVButton">Download CV</Button>
                </CallToActions>

                <Stats>
                    <div>
                        <span>5+</span>
                        <span>Experience Years </span>
                    </div>                    
                    <div>
                        <span>10+</span>
                        <span>Github Projects</span>
                    </div>
                    <div>
                        <span>5+</span>
                        <span>Technologies</span>
                    </div>
                </Stats>
            </Intro>
            <ProfileImg>
                <Circle />
                <Image src = {Profile} alt = "Carlos Alvarez" />
            </ProfileImg>

        </Container>
     );
}

export default Home;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 83vh;
    margin-bottom: 5rem;

    @media(max-width: 1050px) {
        margin-top: 10rem;
        flex-direction: column;
        justify-content: center;
    }
    @media(max-width: 480px) {
        
    }
    
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1050px) {
        margin-bottom: 10rem;
    }

    @media(max-width: 1300px) {
        p {
            font-size: .9rem;
        }
        & > .name {
            font-size: 1.2rem;
        }
    }

    @media(max-width: 480px) {
        p {
            font-size: .9rem;
        }
        & > .name {
            font-size: 1rem;
        }
    }
`;

const ProfileImg = styled.div`
    position: relative
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.div`
    width: 500px;
    height: 500px;
    background: #1a1b1d;
    border-radius: 50%;
    z-index: 1;

    @media(max-width: 1300px) {
        width: 400px;
        height: 400px;
    }
`;

const Image = styled.img`
    position: absolute;
    height: 60%;
    bottom: 15%;
    border-radius: 38%;
    z-index: 2;
    filter: grayscale(100%) contrast(130%);

    @media(max-width: 1300px) {
        height: 50%;
        bottom: 21%;
    }

    @media(max-width: 1050px) {
        bottom: -30%;
    }

`;

const Title = styled.h2`
    color: ${theme.colors.primary};
    font-size: 3rem;
    margin: 1rem 0;

    @media(max-width: 1300px) {
        font-size: 2.5rem;
    }

    @media(max-width: 665px) {
        font-size: 2rem;
    }

    @media(max-width: 1300px) {
        font-size: 1.5rem;
    }
`;

const CallToActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 4rem 0;

    .CVButton {
        background: none;
        border: 2px solid ${theme.colors.text};
        &:hover {

        }
    }

    @media(max-width: 480px) {
        button {
            padding: 1rem;
        }
    }
`;

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.5rem 1rem;
    background: #1a1b1d;
    border-radius: 10px;
    font-size: 1.2rem;

    & > div {
        display: flex;
        flex-direction: column;
        padding: 0 1.5rem;
        border-left: 1px solid ${theme.colors.text};

        &:first-child {
            border-left: none;
        }

        & > span:first-child {
            color: ${theme.colors.primary};
            font-weight: bold;
            font-size: 1.5rem;

            @media(max-width: 480px) {
                font-size: 1.2rem;   
            }
        }        
    }

    @media(max-width: 480px) {
        font-size: .8rem
     }
`;