import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFoc2FrZiIsImEiOiJja3Bwa2prOHYyNnduMnhvZ3FzdWY1dWh1In0.LwhJUit8XZwv55Cgch0JtA";

const Map = () => {

  const [viewport, setViewport] = React.useState({
    latitude: 43.7843788,
    longitude: -79.41608,
    width: "100%",
    height: "50vh",
    zoom: 10,
  });

  const [settings, setsettings] = useState({
    scrollZoom: false
  });

  return (
    <div  id="location">
      <MapGL {...viewport}{...settings}
        mapStyle="mapbox://styles/mahsakf/ckq0biy8j902h17lmlaj3bymg"
        mapboxApiAccessToken={MAPBOX_TOKEN}

        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={43.7843788} longitude={-79.41608} offsetLeft={-20} offsetTop={-10}>

          <img className="map_icon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"/>

        </Marker>
      </MapGL>
    </div>
  );
}

export default Map;
