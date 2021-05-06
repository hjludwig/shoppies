import React from "react";
import styled from "styled-components";

const Credit = styled.div`
    color: white;
    font-size: 0.85em;
    margin-top: 1em;
    a {
        color: #ccc;
        &:hover {
            color: #aaa;
        }
    }
`;

const PhotoCredit = () => {
    return (
        <Credit>
            Photo by{" "}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
                Charles Deluvio
            </a>{" "}
            on{" "}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/s/photos/movies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
                Unsplash
            </a>
        </Credit>
    );
};

export default PhotoCredit;
