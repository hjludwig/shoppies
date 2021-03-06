import React from "react";
import { Placeholder } from "../results/Results.elements";
import Spinner from "../Spinner";
import Result from "./Result";
import { List, Wrapper } from "./Results.elements";

const Results = ({ results, value, handleNominate, nominations, loading }) => {
    return (
        <Wrapper>
            {loading ? (
                <>
                    <h1>Loading...</h1>
                    <Spinner />
                </>
            ) : !results ? (
                <>
                    <h1>Search Results</h1>
                    <Placeholder>
                        Type a movie name in the search field...
                    </Placeholder>
                </>
            ) : (
                <p>
                    <h1>Search Results for "{value}"</h1>
                    <List>
                        {results.map((result, i) => (
                            <Result
                                movie={result}
                                handleNominate={handleNominate}
                                nominations={nominations}
                                key={`result-${result.imdbID}`}
                            />
                        ))}
                    </List>
                </p>
            )}
        </Wrapper>
    );
};

export default Results;
