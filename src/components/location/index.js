
import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import map_icon from '../../resources/images/icons/mapIcon.png';

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFoc2FrZiIsImEiOiJja3Bwa2prOHYyNnduMnhvZ3FzdWY1dWh1In0.LwhJUit8XZwv55Cgch0JtA";

const Location = () => {

  const [viewport, setViewport] = React.useState({
    longitude: -79.3803946,
    latitude: 43.6494579,
    zoom: 14
  });

  return (
    <div className="map" id="location">
      <MapGL {...viewport}
        width="100%" height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker latitude={43.6494579} longitude={-79.3803946} offsetLeft={-20} offsetTop={-10}>
          <img className="map_icon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Flowers in Chania" />
        </Marker>
      </MapGL>
    </div>
  );
}

export default Location;
