import React from "react";
import styled from "styled-components";
import { button, fadeInUp } from "../../styles/mixins";

const ListItem = styled.li`
    padding: 1em 0.5em;
    /* border-bottom: 1px solid #ccc; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(even) {
        background: #f3f3f3;
    }
    animation-name: ${fadeInUp};
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
`;

const Button = styled.button`
    ${button}
`;

const Nomination = ({ movie, handleRemove }) => {
    const { Title, Year } = movie;
    return (
        <ListItem>
            <span>{`${Title} (${Year})`}</span>
            <Button type="button" onClick={() => handleRemove(movie)}>
                Remove
            </Button>
        </ListItem>
    );
};

export default Nomination;
