import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { theme } from "../styles/theme";
import { toast } from 'react-hot-toast';

const siteKey = process.env.REACT_APP_GOOGLE_RECAPTCHA;

    const Contact = () => {
    const formRef = useRef();
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            setStatus("Please complete the CAPTCHA.");
            return;
        }

        await toast.promise(emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ),
        {
            loading: "Sending...",
            success: "Message Sent Successfully!",
            error: "Failed to send message.",
        })
        .then(
            () => {
                formRef.current.reset();
                setCaptchaVerified(false);
            },
            (error) => {
                console.error("EmailJS Error:", error);
            }
        );
    };

  return (
        <Section id="contact">
        <h2>Contact Me</h2>
        <h3>Let’s Connect and Build Something Great</h3>

        <Form ref={formRef} onSubmit={sendEmail}>
            <input name="user_name" type="text" placeholder="Your Name" required />
            <input name="user_email" type="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <CaptchaWrapper>
                <ReCAPTCHA  sitekey={siteKey} onChange={() => setCaptchaVerified(true)} />
            </CaptchaWrapper>
            
            <button type="submit">Send</button>
        </Form>

        {status && <p>{status}</p>}
        </Section>
  );
};

export default Contact;


const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10rem 0;
    h2 {
        color: ${theme.colors.white};
        font-size: 2.5rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    gap: 1rem;
    padding: 1rem;

    input,
    textarea {
        width: 100%;
        padding: 0.8rem 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 1rem;
    }

    button {
        padding: 0.8rem 1.2rem;
        border: none;
        background-color: ${theme.colors.primary};
        color: white;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
        opacity: 0.9;
        }
    }

    
    @media (max-width: 300px) {
        input,
        textarea,
        button {
        font-size: 0.85rem;
        padding: 0.6rem 0.8rem;
        }
    }
`;

const CaptchaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  margin-top: 1rem;

  @media (max-width: 300px) {
    transform: scale(0.85);
    transform-origin: 0 0;
  }
`;
