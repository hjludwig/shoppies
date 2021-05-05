import styled from "styled-components";
import bg from "./images/timothy-eberly-dTLlhgeEJWg-unsplash.jpg";

export const Main = styled.div`
    background: #efefef;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5em;
    background: url(${bg});
    background-attachment: fixed;
`;
export const Boxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

export const Heading = styled.h1`
    /* margin-top: 3em; */
    margin-bottom: 0.5em;
    font-size: 5em;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
    letter-spacing: 0.05em;
`;
