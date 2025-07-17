import React from "react";
import Contain from "./ServiceCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Services.css"


function Serviceslist() {
    const [service, setService] = useState([]);

    const fetchMenu = (setService) => {
        axios.get("http://localhost:5000/SERVICES")
            .then((res) => {
                console.log(res.data);
                setService(res.data)
            })

            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        fetchMenu(setService);
    }, []);

    return (

        <React.Fragment>
            <section>
                <div className=" service-card container-fluid my-4 align-items-center">
                    <div className="heading">
                        <h2 className="ser-h2">Our Services</h2>
                    </div>
                    <div className="row justify-content-center align-item-center">
                        <div className="service-card2">
                            <ul className="service-ul" >
                                {
                                    service.map((serviceData) =>
                                        <li key={serviceData.id}>
                                            <Contain
                                                img={serviceData.img}
                                                title={serviceData.title}
                                                description={serviceData.description}
                                            />

                                        </li>
                                    )

                                }
                            </ul>


                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}



export default Serviceslist;

