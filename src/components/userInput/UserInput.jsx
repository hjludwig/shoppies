import React from "react";

const Input = ({ handleChange, value }) => {
    return (
        <div>
            <h1>Search for a movie</h1>
            <form>
                <label htmlFor="search">Movie Title</label>
                <input
                    onChange={handleChange}
                    type="search"
                    name="search"
                    id="search"
                    value={value}
                />
            </form>
        </div>
    );
};

export default Input;
