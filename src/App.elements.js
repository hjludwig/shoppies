import styled from "styled-components";

export const Main = styled.div`
    background: #efefef;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5em;
`;
export const Boxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

export const Heading = styled.h1`
    margin-top: 3em;
    margin-bottom: 1em;
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 900;
`;
