import crossImage from "../images/crossImage.svg";

function Cart({ cart, cartOpen, setCartOpen }) {
    let newArr = cart.reduce((sum, curr) => {
        return sum + curr.price;
    }, 0);
    const handleCart = () => {
        cartOpen ? setCartOpen(false) : setCartOpen(true);
    };

    return (
        <>
            <div className="cart-container">
                <div className="cart-title">
                    <h2>Your Cart</h2>
                    <div className="cart-close">
                        <img src={crossImage} onClick={handleCart} alt="" />
                    </div>
                </div>
                {cart.map((item) => (
                    <div className="item-container">
                        <div className="item-information">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="item-price">
                            <h3>£{item.price}</h3>
                        </div>
                    </div>
                ))}
                <div className="cart-total">
                    <h2>Total Price: £{newArr}</h2>
                </div>
            </div>
        </>
    );
}

export default Cart;
