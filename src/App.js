import UserInput from "./components/userInput/UserInput";
import Nominations from "./components/nominations/Nominations";
import Results from "./components/results/Results";
import { useEffect, useState } from "react";

function App() {
    const [results, setResults] = useState([]);
    const [value, setValue] = useState("");
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
        <div className="App">
            <h1>The Shoppies</h1>
            <UserInput handleChange={handleChange} value={value} />
            <Results results={results} value={value} />
            <Nominations />
        </div>
    );
}

export default App;
