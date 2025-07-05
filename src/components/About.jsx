import styled from "styled-components";
import { theme } from "../styles/theme";
import PortfolioImg from "../assets/Subject.png";

function About() {
    return ( 
        <Container id = "about">
            <div style = {{ textAlign: "center" }}>
                <h2>About Me</h2>
                <h3>Crafting Scalable Solutions with Code and Creativity</h3>
            </div>
            <Content>
                <ProfileImg>
                    <Arch />
                    <Image src = {PortfolioImg} alt = "Carlos Alvarez" />
                </ProfileImg>

                <AboutInfo>
                    <p>
                        As a passionate Full Stack Web Developer, I specialize in building dynamic, 
                        user-focused applications using modern technologies like React, Node.js, and Express. 
                        My goal is to create digital experiences that are not only visually engaging but also 
                        scalable, efficient, and accessible across devices. Whether it's front-end UI design 
                        or back-end logic and database integration, I bring thoughtful problem solving and a 
                        commitment to clean, maintainable code to every project.
                    </p>
                    <br />
                    <p>
                        Over the years, I’ve worked on a range of development tasks—from creating responsive 
                        layouts and integrating third-party APIs, to implementing user authentication and 
                        building RESTful back-end services. I enjoy working across the full stack, and I'm 
                        constantly learning new tools and frameworks to improve performance, scalability, and 
                        user experience.
                    </p>
                    <br />
                    <p>
                        Beyond code, I value strong communication, collaboration, and empathy. I believe great 
                        products come from listening to users, iterating quickly, and staying curious. Whether 
                        working independently or on a team, I aim to deliver results that align with both user 
                        needs and business goals.
                    </p>
                </AboutInfo>
            </Content>
        </Container>
     );
}

export default About;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px); 
    padding-top: 10rem;
    gap: 3rem;

    h2 {
        font-size: 2.5rem;
        color: ${theme.colors.white};
    }

    @media (max-width: 480px) {
        padding-top: 6rem;
        gap: 2rem;

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.2rem;
        }
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;    

    @media(max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
        align-items: center; /* add this to center horizontally */
        padding: 2rem;
        gap: 2rem;
    }

    @media (max-width: 420px) {
        width: 100%;
        padding: 2rem 0;
    }

`;

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 50%;

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

const ProfileImg = styled.div`
  position: relative;
  width: 420px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    width: 350px;
    height: 450px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 350px;
  }
`;


const Arch = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background: #1a1b1d;
  border-radius: 50% 50% 10px 10px;
  z-index: 1;
`;




const Image = styled.img`
  position: absolute;
  height: 110%;
  bottom: 0;
  z-index: 2;
  filter: grayscale(100%) contrast(130%);
  object-fit: contain;

  @media (max-width: 1050px) {
    height: 108%;
  }

  @media (max-width: 480px) {
    height: 100%;
  }
`;