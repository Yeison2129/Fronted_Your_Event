import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapEvento = (props) => {
  const mapRef = useRef(null);
  const limitesQuindio = [
    [3.995, -76.218], // Coordenada del límite superior izquierdo del Quindío
    [4.862, -75.307] // Coordenada del límite inferior derecho del Quindío
  ];


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
    <MapContainer
      className="mapEvento"
      style={{ width: "500px", height: "250px" }}
      center={[4.45, -75.607]}
      zoom={11}
      ref={mapRef}
      maxBounds={limitesQuindio}
      minZoom={11}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapEvento;
