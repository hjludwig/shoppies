import React from "react";
import Movie from "../Movie";
import Result from "./Result";
import { List, Wrapper } from "./Results.elements";

const Results = ({ results, value, handleNominate }) => {
    return (
        <Wrapper>
            {results && (
                <>
                    <h1>Results for "{value}"</h1>
                    <List>
                        {results.map(result => (
                            <Result
                                movie={result}
                                handleNominate={handleNominate}
                            />
                        ))}
                    </List>
                </>
            )}
        </Wrapper>
    );
};

export default Results;
