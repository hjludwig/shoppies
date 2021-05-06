import styled from "styled-components";
import { box } from "../../styles/mixins";

export const Wrapper = styled.div`
    ${box}
    /* position: relative; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    overflow-y: auto;
`;
export const List = styled.ul`
    /* justify-self: flex-start; */
    list-style-type: none;
`;

export const Placeholder = styled.p`
    color: #aaa;
`;
