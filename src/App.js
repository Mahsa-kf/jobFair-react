import React from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import Description from './components/description';
import EventInfo from './components/event_info';
import Location from './components/location';
import Employers  from './components/employers';
import RegForm from './components/RegForm';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>
    
      <Element name="description">
        <Description/>
      </Element>

      <Element name="EventInfo">
        <EventInfo/>
      </Element>

      <Element name="employers">
       <Employers/>
      </Element>

      <Element name="regForm">
        <RegForm/>
      </Element>

      <Element name="location">
          <Location/>
      </Element>
       
      <Footer/>
    </div>
  );
}

export default App;
