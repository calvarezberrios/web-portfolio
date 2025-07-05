import styled from "styled-components";
import { theme } from "../styles/theme";
import ServiceCard from "./ServiceCard";
import DevicesIcon from "@mui/icons-material/Devices";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ComputerIcon from '@mui/icons-material/Computer';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const services = [
    {
        icon: IntegrationInstructionsIcon,
        title: "Web Application Development",
        description: "Tailored web apps built from scratch, optimized for your unique business goals."
    },
    {
        icon: ComputerIcon,
        title: "Front-end Development",
        description: "Intuitive, responsive user interfaces built with modern frameworks like React."
    },
    {
        icon: CloudQueueIcon,
        title: "Back-end Development",
        description: "Robust server-side logic and APIs built for performance, scalability, and security."
    },
    {
        icon: StorageIcon,
        title: "Database Design & Integration",
        description: "Reliable database architecture with MongoDB, PostgreSQL, and efficient querying."
    },
    {
        icon: VerifiedUserIcon,
        title: "Authentication & Authorization",
        description: "Secure user login systems with role-based access control and session management."
    },
    {
        icon: DevicesIcon,
        title: "Responsive Design",
        description: "Mobile-friendly layouts that adapt to any screen size"
    },
];

function Services() {
    return ( 
        <Container id = "services">
            <h2>Services</h2>
            <p>
                As a Full Stack Web Developer, I specialize in building fast, responsive, and scalable web applications using modern technologies like React, Node.js, Express, and MongoDB. Whether you need a custom front-end interface or a secure, database-driven backend, I deliver clean, maintainable code and seamless user experiences. Let’s bring your idea to life — from concept to deployment.
            </p>
            
            <ServiceGrid>
                {services.map(service => {
                    return <ServiceCard key = {service.title} {...service} />;
                })}
            </ServiceGrid>
            

            
        </Container>
     );
}

export default Services;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px);
    gap: 1rem;
    padding-top: 10rem;
    margin-bottom: 5rem;

    h2 {
        font-size: 2.5rem;
        color: ${theme.colors.white};
    }

    p {
        width: 60%;
        margin-bottom: 2rem;
        text-align: justify;

        @media(max-width: 870px) {
            width: 100%;
        }
    }

    

`;

const ServiceGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 2rem;
    justify-items: center;

    @media(max-width: 520px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media(max-width: 390px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
`;