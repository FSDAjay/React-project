import "./Menu.css"

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";



function Card(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, [])


    return (

        <div className="Card" data-aos="zoom-in-up" data-aos-duration="2000">
            <img className="card-img" src={props.img} alt="img_logo" />
            <div className="card-text">
                <h2 className="card-h2">{props.name}</h2>
                <p className="card-para">{props.description}</p>

            </div>
            <h4 className="card-h4">${props.price}</h4>
        </div>
    )
}



export default Card;

