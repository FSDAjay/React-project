import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" height="80vh">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg" height={'600px'} class="d-block w-100 " alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.adivedanatural.com/cdn/shop/articles/smeeling-coffee-beans_900x_5148e663-e441-4642-af81-ade43296e6b5_800x.jpg?v=1615107959" height={'600px'} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://assets.architecturaldigest.in/photos/60083ed208ae763b9ae8542d/16:9/w_2560%2Cc_limit/fermented-coffee-beverage-brew-1366x768.jpg" height={'600px'} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );



}

export default Carousel;






