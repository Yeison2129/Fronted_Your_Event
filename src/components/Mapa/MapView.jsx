import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "./assets/data.json";
import Markers from "./VenueMarkers";

import { useLocation, useNavigate } from "react-router-dom";

import "leaflet/dist/leaflet.css";


const MapView = (props) => {
<<<<<<< HEAD
  const [state, setState] = useState({
    currentLocation: { lat: 4.53390, lng: -75.58700 },
    zoom: 11,
    data,
  });

  const location = useLocation();
  // const history = useNavigate();

=======
  const [ state, setState] = useState({
    currentLocation: { lat: 4.45, lng: -75.487 },
    data
  })
  const mapRef = useRef(null);
  const limitesQuindio = [
    [3.995, -76.218], // Coordenada del límite superior izquierdo del Quindío
    [4.862, -75.307] // Coordenada del límite inferior derecho del Quindío
  ]
  
>>>>>>> Developer
  useEffect(() => {
    const leafletMap = mapRef.current;

    if (leafletMap) {
      leafletMap.setMaxBounds(limitesQuindio);
      leafletMap.whenReady(() => {
        leafletMap.fitBounds(limitesQuindio);
      });
    }
  }, []);

  return (
<<<<<<< HEAD
    <MapContainer className="mapView" center={state.currentLocation} zoom={state.zoom} dragging={false} scrollWheelZoom={false}>
=======
    <MapContainer
      className="mapView"
      style={{ zIndex: 0 }}
      zoom={11}
      center={[4.45, -75.607]}
      ref={mapRef}
      maxBounds={limitesQuindio}
      minZoom={11}
      doubleClickZoom={false}
    >
>>>>>>> Developer
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </MapContainer>
  );
};

export default MapView;
