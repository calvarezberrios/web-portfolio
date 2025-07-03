import styled from "styled-components";

function Services() {
    return ( 
        <Container id = "services">Services</Container>
     );
}

export default Services;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80vh;
    margin-top: 180px;
    border: 1px solid red;
`;