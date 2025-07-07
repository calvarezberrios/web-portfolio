import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard'; 
import { theme } from '../styles/theme';

const projects = [
  {
    name: 'Disney Parent Marketing Site',
    image: 'https://image.thum.io/get/width/800/crop/600/noanimate/https://disney-parent-marketing-egk4t6o82.vercel.app/',
    liveUrl: 'https://disney-parent-marketing-egk4t6o82.vercel.app/',
    repoUrl: 'https://github.com/calvarezberrios/disney-parent-marketing'
  },
  {
    name: 'Disney Parent App',
    image: 'https://image.thum.io/get/width/800/crop/600/noanimate/https://disney-parent-app.vercel.app/',
    liveUrl: 'https://disney-parent-app.vercel.app/',
    repoUrl: 'https://github.com/calvarezberrios/disney-parent-app'
  },
  {
    name: 'DevDesk Queue App',
    image: 'https://image.thum.io/get/width/800/crop/600/noanimate/https://devdeskqueue3.vercel.app/student/login',
    liveUrl: 'https://devdeskqueue3.vercel.app/student/login',
    repoUrl: 'https://github.com/DevDeskQueue3/React'
  },

  {
    name: 'Sleep Tracker App',
    image: 'https://image.thum.io/get/width/800/crop/600/noanimate/https://sleep-tracker-app-d6kq.onrender.com/',
    liveUrl: 'https://sleep-tracker-app-d6kq.onrender.com/',
    repoUrl: 'https://github.com/calvarezberrios/sleep-tracker-app'
  },
  {
    name: 'Sleep Tracker API',
    image: 'https://image.thum.io/get/width/800/crop/600/noanimate/https://sleeptracker-back-end.onrender.com/',
    liveUrl: 'https://sleeptracker-back-end.onrender.com/',
    repoUrl: 'https://github.com/Build-Week-Sleeping-Tracker/back-end'
  },
];

const inRefurbishment = ["DevDesk Queue App"];



function Projects() {
  return (
    <Container id="projects">
      <h2>Projects</h2>
      <h3>Things I’ve Built and Worked On</h3>
      <Grid>
        {projects.map((project, index) => {
          let isRefurbishing = false;
          if (inRefurbishment.includes(project.name)) {
            isRefurbishing = true;
          }
          return (<ProjectCard key={index} isRefurbishing = {isRefurbishing} {...project} />);
        })}
      </Grid>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px);
    padding-top: 10rem;
    margin-bottom: 5rem;

    h2 {
        font-size: 2.5rem;
        color: ${theme.colors.white};
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    margin-top: 3rem;
    

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        display: flex;
        overflow-x: auto;
        gap: 1.5rem;
        scroll-snap-type: x mandatory;
        padding-bottom: 2rem;
        width: 120%;

        & > * {
        flex: 0 0 80%;
        scroll-snap-align: start;
        }

        /* Optional scroll styling */
        &::-webkit-scrollbar {
        height: 8px;
        }
        &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 8px;
        }
    }
`;
