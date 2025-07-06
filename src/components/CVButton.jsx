import styled from "styled-components";
import DownloadIcon from '@mui/icons-material/Download';
import { theme } from "../styles/theme";

function CVButton({ className }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Carlos_Alvarez_CV.pdf';
        link.setAttribute('download', 'Carlos_Alvarez_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return ( 
        <Button className = {className} onClick = {handleDownload}><DownloadIcon style ={{ marginRight: "0.5rem" }} />Download CV</Button>
     );
}

export default CVButton;

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 0.3rem 1.5rem;
    border-radius: 10px;
    border: none;
    font-size: .9rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

     @media(max-width: 385px) {
        padding: 0.7rem 1.5rem;
    }
`;