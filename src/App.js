import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import EventNfo from './components/eventNfo';
import Map from './components/map'

const App = () => {
  return (
    <div className="App">
      <Header/>


      <>
      <Featured/>
      </>

      <>
      <EventNfo/>
      </>


      <div className="map">
          <Map />
      </div>
{/* 
            <div style={{backgroundColor:'pink',height:'800px'}}></div>
            <div style={{backgroundColor:'green',height:'800px'}}></div>
            <div style={{backgroundColor:'orange',height:'800px'}}></div>
            <div style={{backgroundColor:'blue',height:'800px'}}></div> */}
       
      <Footer/>
    </div>
  );
}

export default App;
