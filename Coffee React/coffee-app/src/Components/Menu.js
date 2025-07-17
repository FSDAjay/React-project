import React from "react";
import Card from "./MenuCard";
import "./Menu.css"





function Menu() {
    const MENU = [
        {
            id: "m-1",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE1",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "299",
        },
        {
            id: "m-2",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE2",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "209",
        },
        {
            id: "m-3",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE3",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "280",
        },
        {
            id: "m-4",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE4",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "285",
        },
        {
            id: "m-5",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE5",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "205",
        }, {
            id: "m-6",
            img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/a450e2617a5f31cf16d3a178f9cf8451.jpg",
            name: "CAFE6",
            description: "Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. ",
            price: "230",
        }
    ]





    return (
        <React.Fragment>
            <section>
                <div className="menu-cont container-fluid ">
                    <div className="heading">
                        <h1 className="menu-h1">Our Menu</h1>
                    </div>
                    <div className="row justify-content-center align-item-center ">
                        <ul className="menu-ul ">
                            {
                                MENU.map((serData) => (
                                    <li key={serData.id}>
                                        <Card
                                            img={serData.img}
                                            name={serData.name}
                                            description={serData.description}
                                            price={serData.price}
                                        />

                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>


            </section>

        </React.Fragment>

    );
}


export default Menu;