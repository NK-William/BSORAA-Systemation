import React from "react";
import "./map.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "../../assets/locationIcon.png";

const position = [-23.88651, 29.43818] as L.LatLngExpression;
const Map = () => {
  return (
    <div className="map__container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: locationIcon,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          })}
        >
          <Popup>
            112 River St
            <br />
            Polokwane Ext 16 <br />
            0700
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
