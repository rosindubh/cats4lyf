// hello from phil
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Cats from "./Components/Cats";
import Cart from "./Components/Cart";
import cartImage from "./images/cartImage.svg";
//import lnrCart from './images/lnrCart2.png'
// import CatInfo from "./Components/CatInfo"

import "./App.css";

function App() {
    const [cats, setCats] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const getCats = async () => {
        const response = await fetch(
            "https://api.thecatapi.com/v1/breeds?limit=10"
        );
        const data = await response.json();
        const catPrice = data.map((object) => {
            object["price"] = Math.floor(Math.random() * 1000) + 300;
            return object;
        });
        setCats(catPrice);
    };
    useEffect(() => {
        getCats();
    }, []);

    const handleCart = () => {
        cartOpen ? setCartOpen(false) : setCartOpen(true);
    };

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

                        <img
                            src={cartImage}
                            alt=""
                            className="item"
                            onClick={handleCart}
                        />
                        <ReactModal
                            isOpen={cartOpen}
                            className="Modal"
                            overlayClassName="Overlay"
                        >
                            <Cart
                                cart={cart}
                                setCart={setCart}
                                cartOpen={cartOpen}
                                setCartOpen={setCartOpen}
                            />
                        </ReactModal>
                    </div>
                </header>

                <div className="main">
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cats">
                        <div className="cat-wrapper">
                            <div id="cat-Thumbnail">
                                {cats.map((cat) => (
                                    <Cats
                                        name={cat.name}
                                        price={cat.price}
                                        image={cat.image.url}
                                        cart={cart}
                                        setCart={setCart}
                                        id={cat.reference_image_id}
                                        key={cat.reference_image_id}
                                    />
                                ))}
                            </div>
                        </div>
                    </Route>
                    {/* <Route path="/cats/"><CatInfo cats={cats}/></Route> */}
                </div>
            </div>
        </Router>
    );
}

export default App;
