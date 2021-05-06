import styled from "styled-components";
import bg from "./images/charles-deluvio-I6mx55jXOvM-unsplash.jpg";

export const Main = styled.div`
    background: #efefef;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(
            0deg,
            rgba(104, 115, 121, 1) 0%,
            rgba(104, 115, 121, 0.6615021008403361) 100%
        ),
        url(${bg});
    background-size: cover;
    background-attachment: fixed;
`;
export const Boxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto minmax(0, 1fr);
    gap: 15px;
    width: 90vw;
    height: 80vh;
`;

export const Heading = styled.h1`
    font-size: 5em;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
    letter-spacing: 0.05em;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
