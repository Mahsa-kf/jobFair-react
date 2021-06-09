
import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
const MAPBOX_TOKEN = "pk.eyJ1IjoibWFoc2FrZiIsImEiOiJja3Bwa2prOHYyNnduMnhvZ3FzdWY1dWh1In0.LwhJUit8XZwv55Cgch0JtA";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.6494579, // Toronto
    longitude: -79.3803946, // Toronto
    zoom: 12,
    pitch: 0,
    bearing: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      transitionDuration={200}
    >

      <Marker 
        latitude={37.78}
        longitude={-122.41} >
        <div>You are here</div>
      </Marker>
    </MapGL>
  );
};

export default Map;
