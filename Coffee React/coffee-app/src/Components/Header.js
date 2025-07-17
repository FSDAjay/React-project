import React from "react";
import './Header.css';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';


function Headers() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg border-bottom border-1  border-dark border- shadow-lg py-3 d-flex justify-content-between ">
                <div class="container-fluid">
                    <a class="navbar-brand text-color-dark" href="3"><span className="brand">FCS</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto  mb-lg-0">
                            <li class="nav-item px-2">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="Home" class="nav-link active " smooth={true} duration={500}> <span class="btn btn-outline-dark">Home</span> </Link>
                            </li>

                            <li class="nav-item px-2">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="About" class="nav-link active " smooth={true} duration={500}> <span class="btn btn-outline-dark">About</span> </Link>
                            </li>

                            <li class="nav-item px-2">
                                {/* <a class="nav-link active" href="#" >Disabled</a> */}
                                <Link to="Menu" class="nav-link active" smooth={true} duration={500}><span class="btn btn-outline-dark">Menu</span></Link>
                            </li>
                            <li class="nav-item px-2">
                                {/* <a class="nav-link active" href="#" >Disabled</a> */}
                                <Link to="Services" class="nav-link active" smooth={true} duration={500}><span class="btn btn-outline-dark">Services</span></Link>
                            </li>


                        </ul>

                        <ul class="navbar-nav ms-auto  mb-lg-0">
                            <li class="nav-item px-2">
                                {/* <a class="nav-link active" href="#" >Disabled</a> */}
                                <Link to="Contact" class="nav-link active" smooth={true} duration={500}><span class="btn btn-outline-dark">Contact</span></Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>

    )
}

export default Headers;