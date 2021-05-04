import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background: pink;
    position: fixed;
    top: 0;
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Banner = ({ message }) => {
    return (
        <Wrapper>
            <p>{message}</p>
        </Wrapper>
    );
};

export default Banner;
