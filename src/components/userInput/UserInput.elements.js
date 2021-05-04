import styled from "styled-components";
import { box } from "../../styles/mixins";

export const Wrapper = styled.div`
    grid-column: 1/-1;
    /* background: white; */
    ${box}
`;

export const Form = styled.form`
    position: relative;
    label {
        margin-bottom: 0.5em;
        display: inline-block;
    }
    input {
        padding: 0.5em 0.5em 0.5em 2.5em;
        width: 100%;
        font-size: 1.25em;
    }
    .icon {
        position: absolute;
        top: 38px;
        left: 0.5em;
        font-size: 1.5em;
        color: #ccc;
    }
`;
