import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 8em;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin-left: 0.5em;
    }
`;

const Banner = ({ message }) => {
    return (
        <Wrapper>
            <FaRegCheckCircle size={"2em"} color={"#789876"} />
            <p>{message}</p>
        </Wrapper>
    );
};

export default Banner;
