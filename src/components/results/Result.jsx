import React, { useEffect, useState } from "react";
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

const Result = ({ movie, handleNominate, nominations }) => {
    const { Title, Year, imdbID } = movie;
    const [nominated, setNominated] = useState(false);
    let message = false;
    useEffect(() => {
        if (nominations.some(item => item.Title === movie.Title)) {
            setNominated(true);
        } else {
            setNominated(false);
        }
    }, [nominations, movie.Title]);

    return (
        <ListItem key={`result-${imdbID}`}>
            <span>{`${Title} (${Year})`}</span>
            <button
                type="button"
                onClick={() => handleNominate(movie)}
                disabled={nominated}
            >
                Nominate
            </button>
        </ListItem>
    );
};

export default Result;
