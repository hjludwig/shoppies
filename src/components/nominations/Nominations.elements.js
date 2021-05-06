import styled from "styled-components";
import { box } from "../../styles/mixins";

export const Wrapper = styled.div`
    ${box}
    position: relative;
    overflow-y: auto;
`;

export const List = styled.ul`
    list-style-type: none;
`;
