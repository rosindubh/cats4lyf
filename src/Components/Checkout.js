import Basket from "./Basket";

const CheckOut = ({ cart, setCart }) => {
    let newArr = cart.reduce((sum, curr) => {
        return sum + curr.price;
    }, 0);
    return (
        <div className="checkout-wrapper">
            <div className="form-div">
                <form className="add-form">
                    <div className="form-control">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className="form-control">
                        <label>Address</label>
                        <input type="text" placeholder="Enter Address" />
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email" />
                    </div>

                    <input
                        type="submit"
                        value="Proceed to payment"
                        className="btn
            btn-block"
                    />
                </form>
            </div>
            <div className="checkout-div">
                <div className="checkout-title">
                    <h2>Your Cart</h2>
                </div>
                {cart.map((item) => (
                    <Basket
                        key={item.id}
                        item={item}
                        cart={cart}
                        setCart={setCart}
                        price={item.price}
                        name={item.name}
                    />
                ))}
                <div className="checkout-total">
                    <h2>Total Price: £{newArr}</h2>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
