import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [cats, setCats] = useState([]);

    const getCats = async () => {
        // for (let i = 0; i < 9; i += 1) {
            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search?limit=10"
            );
            const data = await response.json();
            setCats(data);
        // }
    };
    useEffect(() => {
        getCats();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cats4Sale</h1>
                {cats.map((cat) => (
                    <img src={cat.url} alt=""></img>
                ))}
            </header>
        </div>
    );
}

export default App;
