import React from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import Description from './components/description';
import EventInfo from './components/event_info';
import Map from './components/map';
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

      <Element name="Employers">
       <Employers/>
      </Element>

      <Element name="RegForm">
        <RegForm/>
      </Element>

{/*       
      <div style={{backgroundColor:'pink',height:'800px'}}></div> */}

      <div id="map" className="map">
          <Map />
      </div>
 
           
            {/*<div style={{backgroundColor:'green',height:'800px'}}></div>
            <div style={{backgroundColor:'orange',height:'800px'}}></div>
            <div style={{backgroundColor:'blue',height:'800px'}}></div> */}
       
      <Footer/>
    </div>
  );
}

export default App;
