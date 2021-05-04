import React from "react";
import styled from "styled-components";
import { Form, Wrapper } from "./UserInput.elements";
import { BsSearch } from "react-icons/bs";

const Input = ({ handleChange, value }) => {
    return (
        <Wrapper>
            <h1>Search for a movie</h1>
            <Form>
                <label htmlFor="search">Movie Title</label>
                <BsSearch className="icon" />
                <input
                    onChange={handleChange}
                    type="search"
                    name="search"
                    id="search"
                    value={value}
                />
            </Form>
        </Wrapper>
    );
};

export default Input;
