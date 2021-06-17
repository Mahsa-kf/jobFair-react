
import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import map_icon from '../../resources/images/icons/mapIcon.png';

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFoc2FrZiIsImEiOiJja3Bwa2prOHYyNnduMnhvZ3FzdWY1dWh1In0.LwhJUit8XZwv55Cgch0JtA";

const Location = () => {

  const [viewport, setViewport] = React.useState({

    latitude: 43.7843788,
    longitude: -79.41608,
    width: "50vw",
    height: "50vh",
    zoom: 14
  });

  return (
    <div className="map" id="location">
      <MapGL {...viewport}
        mapStyle="mapbox://styles/mahsakf/ckq0biy8j902h17lmlaj3bymg"
        mapboxApiAccessToken={MAPBOX_TOKEN}

        onViewportChange={viewport => {
          setViewport(viewport);
        }}

      >
        <Marker latitude={43.7843788} longitude={-79.41608} offsetLeft={-20} offsetTop={-10}>

          <img className="map_icon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="Flowers in Chania" />

        </Marker>
      </MapGL>
    </div>
  );
}

export default Location;
