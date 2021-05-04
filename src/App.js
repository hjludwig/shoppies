import UserInput from "./components/userInput/UserInput";
import Nominations from "./components/nominations/Nominations";
import Results from "./components/results/Results";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Boxes, Main, Heading } from "./App.elements";
import Banner from "./components/Banner";

function App() {
    const [results, setResults] = useState([]);
    const [value, setValue] = useState("");
    const [nominations, setNominations] = useState([]);

    const handleNominate = movie => {
        if (nominations.length >= 5) {
            return;
        }
        setNominations([...nominations, movie]);
    };
    const handleRemove = movie => {
        const newNomiations = nominations.filter(current => current !== movie);
        setNominations(newNomiations);
    };

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        // TODO: set timeout to search query?
        const fetchData = async query => {
            const key = process.env.REACT_APP_OBDb_API_KEY;
            const url = `http://www.omdbapi.com/?apikey=${key}&s=${query}*&type=movie`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setResults(data.Search);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData(value);
    }, [value]);

    return (
        <Main>
            <GlobalStyle />
            <Heading>The Shoppies</Heading>
            {nominations.length === 5 && (
                <Banner message={"You have made 5 nominations"} />
            )}
            <Boxes>
                <UserInput handleChange={handleChange} value={value} />
                <Results
                    results={results}
                    value={value}
                    handleNominate={handleNominate}
                    nominations={nominations}
                />
                <Nominations
                    nominations={nominations}
                    handleRemove={handleRemove}
                />
            </Boxes>
        </Main>
    );
}

export default App;
