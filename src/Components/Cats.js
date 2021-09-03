import { Link } from "react-router-dom";
function Cats({ name, price, image, cart, setCart, id }) {
    const submitToCart = (e) => {
        e.preventDefault();
        setCart([
            ...cart,
            {
                name: name,
                price: price,
                id: id,
                cartID: Math.floor(Math.random() * 1000000),
            },
        ]);
    };

    // Math.floor(Math.random() *100000)
    return (
        <div id="cat-Card">
            <button onClick={submitToCart}>Add to Cart</button>
            <h3 id="cat-Price">£{price}</h3>
            <Link to={`/cats/${name}`}>
                <h2 id="cat-Name">{name}</h2>
            </Link>
            <img src={image} alt="" id="cat-Image"></img>
        </div>
    );
}

export default Cats;
