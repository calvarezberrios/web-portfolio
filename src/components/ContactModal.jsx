import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ContactForm from "./Contact";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ContactForm inModal />
      </Modal>
    </Overlay>
  );
}

export default ContactModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const Modal = styled.div`
    background: #1a1b1d;
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    color: ${theme.colors.text};
    position: relative;

    h2 {
        color: ${theme.colors.primary};
    }

    div {
        padding: 0;
    }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  background: none;
  color: ${theme.colors.text};
  border: none;
  cursor: pointer;
`;
