import { css, keyframes } from "styled-components";

export const box = css`
    background: white;
    padding: 2em;
    box-shadow: 1px 1px 10px #333;
    border-radius: 4px;
    h1 {
        margin-bottom: 0.5em;
        text-transform: uppercase;
        font-size: 1.5em;
        letter-spacing: 0.05em;
    }
`;

export const button = css`
    background: #687379;
    color: white;
    padding: 0.5em 1em;
    border: 2px solid #889098;
    border-radius: 4px;
    transition: background-color 0.25s ease;
    &:hover {
        background: #889098;
        cursor: pointer;
    }
    &:disabled {
        background: #d2d8de;
        border-color: #dfe4e8;
        cursor: not-allowed;
    }
`;

export const fadeInUp = keyframes`
    0% {transform: translateY(2em); opacity: 50;}
    100% {transform: translateY(0); opacity: 100;}
`;
export const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {transform: translateY(0); opacity: 100;}
`;
