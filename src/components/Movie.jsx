import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    padding: 1em 0.5em;
    /* border-bottom: 1px solid #ccc; */
    display: flex;
    justify-content: space-between;
    &:nth-child(even) {
        background: #f3f3f3;
    }
`;

const Movie = ({ movie, handleClick }) => {
    const { Title, Year, imdbID } = movie;
    return (
        <ListItem key={imdbID}>
            <span>{`${Title} (${Year})`}</span>
            <button type="button" onClick={() => handleClick(movie)}>
                Nominate
            </button>
        </ListItem>
    );
};

export default Movie;
