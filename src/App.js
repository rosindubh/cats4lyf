// hello from phil
import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Cats from "./Components/Cats";
import Cart from "./Components/Cart";
import lnrCart from './images/lnrCart.svg'
// import CatInfo from "./Components/CatInfo"

import "./App.css";

function App() {
    const [cats, setCats] = useState([]);
    const [cart, setCart] = useState([
        { name: "Liam", price: 399 },
        { name: "Joe", price: 299 },
        { name: "Phil", price: 499 },
    ]);

    const getCats = async () => {
        const response = await fetch(
            "https://api.thecatapi.com/v1/breeds?limit=10"
        );
        const data = await response.json();
        const catPrice = data.map((object) => {
            object["price"] = Math.floor(Math.random() * 1000) + 300;
            return object
        });
        setCats(catPrice);
    };
    useEffect(() => {
        getCats();
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="navigation">
                    <Link to="/">
                        <h1>Cats4Sale</h1>
                    </Link>
                    <div className="navigation-sub">
                        <Link to="/cats" className="item">
                            Cats
                        </Link>
                        <Link to="/cart" className="item">
                        <img src={lnrCart} alt=""/>
                        </Link>
                    </div>
                </header>

                <div className="main">
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cats">
                        <Cats cats={cats} carts={cart} setCart={setCart} />
                    </Route>
                    {/* <Route path="/cats/"><CatInfo cats={cats}/></Route> */}
                </div>
            </div>
        </Router>
    );
}

export default App;
