import React from "react";

const Movie = ({ result }) => {
    const { Title, Year, imdbID } = result;
    return (
        <li key={imdbID}>
            <span>{Title}</span>
            <span>{Year}</span>
            <button type="button">Nominate</button>
        </li>
    );
};

export default Movie;
