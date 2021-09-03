import crossImage from "../images/crossImage.svg";
import Basket from "./Basket"

function Cart({ cart, setCart, cartOpen, setCartOpen }) {
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
                <Basket key={item.id} item={item} cart={cart} setCart={setCart} price={item.price} name={item.name} />
                ))}
                <div className="cart-total">
                    <h2>Total Price: £{newArr}</h2>
                </div>
            </div>
        </>
    );
}

export default Cart;
