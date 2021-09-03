import minusImage from "../images/minusImage.svg";
function Basket({ cart, setCart, name, price, item }) {
    const deleteHandler = () => {
        setCart(cart.filter((el) => el.id !== item.id));
    };
    return (
        <>
            <div className="item-container">
                <div className="item-information">
                    <img src={minusImage} onClick={deleteHandler} alt="" />
                    <h3>{name}</h3>
                </div>
                <div className="item-price">
                    <h3>£{price}</h3>
                </div>
            </div>
        </>
    );
}

export default Basket;
