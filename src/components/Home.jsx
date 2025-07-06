import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import SocialButtons from "./SocialButtons";
import { Button } from "./Navbar";
import Profile from "../assets/Subject.png";
import { useNavigate } from "react-router-dom";
import CVButton from "./CVButton";

function Home() {
    const navigate = useNavigate();

    

    return ( 
        <Container id = "home">
            <Intro>
                <p>Hi I am</p>
                <h2 className = "name">Carlos Alvarez-Berrios aka "Mannie"</h2>
                <Title>Full Stack Web Developer</Title>
                <SocialButtons />
                <CallToActions>
                    <Button onClick = {() => navigate("#contact")}>Hire Me</Button>
                    <CVButton className = "CVButton" />
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
  width: 100%;
  min-height: calc(80vh - 150px);
  margin-bottom: 5rem;
  
  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center; /* add this to center horizontally */
    padding: 2rem;
    gap: 3rem;
  }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;  

    .CVButton {
        background: none;
        border-color: ${theme.colors.text}
    }

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
        padding: 0 1rem;
        max-width: 100vw;
        p {
            font-size: .9rem;
        }
        & > .name {
            font-size: 1rem;
        }
    }
`;

const ProfileImg = styled.div`
  position: relative;
  width: 620px;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 1400px) {
    width: 520px;
    height: 520px;
    flex-shrink: 0;
  }

  @media (max-width: 1220px) {
    width: 420px;
    height: 420px;
    flex-shrink: 0;
  }

  @media (max-width: 1050px) {
    width: 520px;
    height: 520px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;


const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95%;
  background: #1a1b1d;
  border-radius: 50%;
  z-index: 1;
`;




const Image = styled.img`
  position: absolute;
  height: 110%;
  bottom: 0;
  z-index: 2;
  filter: grayscale(100%) contrast(130%);
  border-radius: 40%;
  object-fit: contain;

  @media (max-width: 1050px) {
    height: 115%;
  }

  @media (max-width: 480px) {
    height: 120%;
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
        padding: 0 1rem;
        border-left: 1px solid ${theme.colors.text};

        &:first-child {
            border-left: none;
        }

        span:first-child {
            color: ${theme.colors.primary};
            font-weight: bold;
            font-size: 1.5rem;

            @media(max-width: 480px) {
                font-size: 1.2rem;   
            }
        }        
    }

    @media(max-width: 480px) {
        font-size: .8rem;
        padding: 1rem 0;
     }
`;