import React from "react";
import Nomination from "./Nomination";
import { List, Wrapper } from "./Nominations.elements";

const Nominations = ({ nominations, handleRemove }) => {
    return (
        <Wrapper>
            <h1>My Nominations</h1>
            <List>
                {nominations.map(movie => (
                    <Nomination movie={movie} handleRemove={handleRemove} />
                ))}
            </List>
        </Wrapper>
    );
};

export default Nominations;
