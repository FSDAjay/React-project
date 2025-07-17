// import logo from './logo.svg';
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Services from './Components/Services';
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import SpecialityCont from './Components/SpecialityCont'
import ContactUs from './Components/Contact';
import Footer from './Components/fotter';
import { Element } from 'react-scroll';

import './App.css';
// import Special1 from './Components/Specila1';

function App() {
  return (
    <React.Fragment className="Main-body">


      <Element name="Home">
        <Header />
        <Carousel />
        <Home />
      </Element>

      <div className='App'>
        <Element name='About'>
          <About />
        </Element>

        <Element name='Menu'>
          <Menu />
        </Element>

        <Element name='Services'>
          <Services />
        </Element>



        {/* <Element name='SpecialityCont'>
          <SpecialityCont />
          <Routes>
            <Route path='/Special1' element={<Special1 />} />
            <Route path='/Special2' element={<Special1 />} />
            <Route path='/Special3' element={<Special1 />} />
          </Routes>
        </Element> */}



        <Element name='Contact'>
          <ContactUs />
        </Element>




        <Footer />


      </div>





    </React.Fragment>


  );
}

export default App;
