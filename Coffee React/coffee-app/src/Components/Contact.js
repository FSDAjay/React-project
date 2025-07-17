import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'

import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [massage, setMassage] = useState(" ");
    const [Phno, setPhno] = useState(" ");
    const [City, setCity] = useState(" ");

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`submitted form data is ${name},${email},${massage}, ${Phno},${City}`);
        // alert(`submitted form data is ${name}`);
        // console.log(`submitted form data is ${name}`);

    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (

        <div className="contact-cont container my-3 " data-aos="zoom-in" data-aos-duration="3000" >
            <Form className="p-5 shadow-lg " onSubmit={formSubmit}>
                <h1 className="cont-h1 mx-5">Contact Details</h1>

                <div className="row">
                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-6 col-lg-6" controlId="formBasicEmail">
                        <Form.Label className="form-l">Name</Form.Label>
                        <Form.Control className="form-inp" type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-6 col-lg-6" controlId="formBasicEmail">
                        <Form.Label className="form-l">Email Address</Form.Label>
                        <Form.Control className="form-inp" type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </div>


                <div className="row">

                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-6 col-lg-6" controlId="formBasicEmail">
                        <Form.Label className="form-l">Ph no:</Form.Label>
                        <Form.Control className="form-inp" type="tel" controlid="phone" pattern="[0-9]{10}"
                            value={Phno}
                            onChange={(e) => setPhno(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-12 col-sm-12 col-md-6 col-lg-6" controlId="formBasicEmail">
                        <Form.Label className="form-l">City:</Form.Label>
                        <Form.Control className="form-inp" type="text" controlid="phone"
                            value={City}
                            onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>
                </div>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="form-l">Enter Massage</Form.Label>
                    <Form.Control className="form-inp" as="textarea" rows={5}
                        value={massage}
                        onChange={(e) => setMassage(e.target.value)} />
                </Form.Group>

                <div>

                    <input className="mx-5 btn btn-outline-warning" type="submit" value="Submit" />
                </div>

                <div className="cont-icon">

                    <i class="fa-brands fa-facebook "></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>

                </div>
            </Form>



        </div>



    )
}


export default ContactUs;