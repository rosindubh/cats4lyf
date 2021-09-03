function CatInfo({
    name,
    image,
    temperament,
    childFriendly,
    description,
    intelligence,
    affection,
    price,
    cart,
    setCart,
    id
}) {
    const submitToCart = (e) => {
        e.preventDefault();
        setCart([...cart, { name: name, price: price, id: id }]);
    };
    return (
        <>
            <div className="info-wrapper">
                <div className="cat-container">
                    <h1>{name}</h1>
                    <img className="cat-info-image" src={image} alt="" />
                
                    <p>
                        <strong>Temperament:</strong> {temperament}
                    </p>
                    <p>
                        <strong>Child Friendly Rating:</strong> {childFriendly}
                        /10
                    </p>
                    <p>
                        <strong>Intelligence Rating:</strong> {intelligence}/10
                    </p>
                    <p>
                        <strong>Affection Rating:</strong> {affection}/10
                    </p>
                    <p>
                        <strong>Description:</strong> {description}
                    </p>
                    <button onClick={submitToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default CatInfo;
