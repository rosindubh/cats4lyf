import {BrowserRouter as Router } from "react-router-dom";

//Test comment - Joe

function Cats({ cats }) {
    return (
        <Router>
            <div className="cat-wrapper">
            <div id="cat-Thumbnail">
                {cats.map((cat) => (
                    // <Link to={`/cats/${cat.name}`}>
                        <div id="cat-Card">
                            <h3 id='cat-Price'>£{cat.price}</h3>
                            <h2 id='cat-Name'>{cat.name}</h2>
                            <br></br>
                                <img src={cat.image.url} alt="" id='cat-Image'></img>
                        </div>
                    // {/* </Link> */}
                ))}
            </div>
            </div>
        </Router>
    );
}

export default Cats;

// HomePage > Cats > CatsInfo
// localhost:300/cats/breedname
