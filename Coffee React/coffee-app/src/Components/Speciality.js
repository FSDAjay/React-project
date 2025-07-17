
import { Link } from "react-router-dom";
import "./Speciality.css"

function Speciality() {
    return (
        <>
            <taglable className="Tagstats">
                <nav className="tagnav">
                    <Link to="/Special1" className="btn btn-outline-warning mx-3 my-3" >SPA1</Link>
                    <Link to="/Special2" className="btn btn-outline-warning mx-3 my-3" >SPA2</Link>
                    <Link to="/Special3" className="btn btn-outline-warning mx-3 my-3" >SPA3</Link>
                    <Link to="/" className="btn btn-outline-warning mx-3 my-3" >SPA4</Link>
                    <Link to="/" className="btn btn-outline-warning mx-3 my-3" >SPA5</Link>
                    <Link to="/" className="btn btn-outline-warning mx-3 my-3" >SPA6</Link>


                </nav>

            </taglable>
        </>

    )
}


export default Speciality;
