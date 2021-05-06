import React from "react";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";
import { fadeIn } from "../styles/mixins";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    margin-top: auto;

    span {
        margin: 2em 0 2em 0.5em;
    }
    .icon {
        vertical-align: middle;
    }
`;

const Banner = ({ message }) => {
    return (
        <Wrapper>
            <FaRegCheckCircle
                size={"2em"}
                color={"#789876"}
                className={"icon"}
            />
            <span>{message}</span>
        </Wrapper>
    );
};

export default Banner;
