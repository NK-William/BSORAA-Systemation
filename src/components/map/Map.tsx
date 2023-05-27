import React from "react";
import "./map.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapDemo from "../../assets/mapDemo.png";

const Map = () => {
  return (
    <div className="map__container">
      <img src={mapDemo} />
    </div>
  );
};

export default Map;
