import styled from 'styled-components';
import { GitHub } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectCard({ name, image, liveUrl, repoUrl }) {
  return (
    <Card>
      <Image src={image} alt={`${name} preview`} />
      <Info>
        <Title>{name}</Title>
        <Links>
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
