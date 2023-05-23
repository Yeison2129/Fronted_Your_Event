import React, { useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import data from "./assets/data.json";
import Markers from "./VenueMarkers";

import { useLocation, useNavigate } from "react-router-dom";
import './map2.css'

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 4.5339, lng: -75.587 },
    zoom: 11,
    data,
    selectedLocation: null,
  });

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setState((prevState) => ({
      ...prevState,
      selectedLocation: { lat, lng },
    }));
    console.log(state.selectedLocation);
  };

  return (
    <>
      <div className="mapView2">
        <MapContainer
          className="mapView"
          center={state.currentLocation}
          zoom={state.zoom}
          doubleClickZoom={false}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {state.selectedLocation && (
          <Markers venues={state.data.venues} />
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default MapView;
