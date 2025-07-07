import styled from 'styled-components';
import { GitHub } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';
import { theme } from '../styles/theme';

function ProjectCard({ name, image, liveUrl, repoUrl, isRefurbishing = false }) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={`${name} preview`} />
        {isRefurbishing && <Overlay>In Refurbishment</Overlay>}
      </ImageWrapper>
      
      <Info>
        <Title>{name}</Title>
        <Links $disabled = {isRefurbishing}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <LaunchIcon /> Live Preview
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <GitHub /> GitHub
          </a>
        </Links>
      </Info>
    </Card>
  );
}

export default ProjectCard;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: #1a1b1d;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 120%;
  transform: translate(-50%, -50%) rotate(-45deg);
  background: repeating-linear-gradient(
    45deg,
    #f1c40f,
    #f1c40f 10px,
    #000 10px,
    #000 20px
  );
  color: ${theme.colors.white};
  font-weight: bold;
  text-align: center;
  padding: 0.6rem 0;
  font-size: 1.5rem;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 2;
  text-transform: uppercase;
  pointer-events: none;
  border-radius: 4px;
`;


const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: white;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  a {
    color: ${props => props.theme.colors.primary || '#00D1FF'};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
