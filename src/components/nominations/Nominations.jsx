import React from "react";
import Nomination from "./Nomination";
import { List, Placeholder, Wrapper } from "./Nominations.elements";
import Banner from "../Banner";

const Nominations = ({ nominations, handleRemove }) => {
    return (
        <Wrapper>
            <h1>My Nominations</h1>
            {nominations.length === 0 && (
                <Placeholder>
                    You haven't made any nominations yet...
                </Placeholder>
            )}
            <List>
                {nominations.map((movie, i) => (
                    <Nomination
                        movie={movie}
                        handleRemove={handleRemove}
                        key={`nomination-${movie.imdbID}`}
                    />
                ))}
            </List>
            {nominations.length === 5 && (
                <Banner message={"You've completed your five nominations!"} />
            )}
        </Wrapper>
    );
};

export default Nominations;
