import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { button } from "../../styles/mixins";

const ListItem = styled.li`
    padding: 1em 0.5em;
    /* border-bottom: 1px solid #ccc; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(even) {
        background: #f3f3f3;
    }
    /* overflow: hidden; */
`;
const Button = styled.button`
    ${button}
`;

const Result = ({ movie, handleNominate, nominations }) => {
    const { Title, Year } = movie;
    const [nominated, setNominated] = useState(false);
    useEffect(() => {
        if (nominations.some(item => item.imdbID === movie.imdbID)) {
            setNominated(true);
        } else {
            setNominated(false);
        }
    }, [nominations, movie.imdbID]);

    return (
        <ListItem>
            <span>{`${Title} (${Year})`}</span>
            <Button
                type="button"
                onClick={() => handleNominate(movie)}
                disabled={nominated}
            >
                Nominate
            </Button>
        </ListItem>
    );
};

export default Result;
