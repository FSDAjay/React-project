import "./Services.css"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";



function Contain(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, [])

    return (

        <div className="Carddiv" data-aos="zoom-in-up" data-aos-duration="3000">
            <img className="service-img" src={props.img} alt="img_service" />
            <div className="service-text">
                <h2 className="serivce-h2">{props.title}</h2>
                <p className="card-discription">{props.description}</p>

            </div>
            <div className="btn btn-outline-warning">Avail</div>
        </div>
    )
}


export default Contain;
