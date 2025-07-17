import React from "react";
import './About.css';


function About() {
    return (

        <React.Fragment>
            <section>
                <div className="About-cont   container-fuild my-4">
                    <div className="heading">
                        <h2 className="home-h2 my-4">About Us</h2>
                    </div>
                    <div className="row justify-content-center align-item-center ">
                        <div className="col col-sm-12 col-md-4 col-lg-4  ">
                            <div>
                                <img className="about-img m-5" src="https://ellebakery.in/wp-content/uploads/2024/04/Coffe-Mocha.png" alt="img_about" />
                            </div>

                        </div>

                        <div className="col col-sm-12 col-md-8 col-lg-8 ">
                            <div>
                                <h2 className="About-h2">Facinate Your <span className="About-span">Taste</span> Of Joy 🙂</h2>
                                <p className="about-para m-3 ">
                                    Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles. Coffee is brewed from the ground roasted beans, which are typically steeped in hot water before being filtered out. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often added to mask the bitter taste or enhance the flavor. There are also various coffee substitutes

                                </p>

                                <div className="About-button  btn btn-outline-warning " >Know More</div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >

    )


}



export default About;
