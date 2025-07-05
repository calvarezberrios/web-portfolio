import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme"; // optional
import DevicesIcon from "@mui/icons-material/Devices"; // replace with any icon

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <IconWrapper>
        <Icon fontSize="inherit" />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default ServiceCard;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  max-height: 250px;
  background: #1a1b1d;
  color: ${theme.colors.text};
  border-radius: 16px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  @media(max-width: 390px) {
    max-height: 300px;
  }
`;

const IconWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${theme.colors.primary};
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0.8rem 0 1.2rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  width: 100% !important;
`;
