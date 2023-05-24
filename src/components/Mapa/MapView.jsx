import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "./assets/data.json";
import Markers from "./VenueMarkers";

import { useLocation, useNavigate } from "react-router-dom";
    
import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 4.53390, lng: -75.58700 },
    zoom: 11,
    data,
  });



  return (
    <MapContainer className="mapView" center={state.currentLocation} zoom={state.zoom} dragging={false} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </MapContainer>
  );
};

export default MapView;
