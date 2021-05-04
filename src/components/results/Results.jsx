import React from "react";
import Movie from "../Movie";

const Results = ({ results, value }) => {
    return (
        <div>
            {results && (
                <>
                    <h1>Results for "{value}"</h1>
                    <ul>
                        {results.map(result => (
                            <Movie result={result} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Results;
