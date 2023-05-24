import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapCrud = (props) => {
  const mapRef = useRef(null);
  const limitesQuindio = [
    [3.195, -76.818], // Coordenada del límite superior izquierdo del Quindío
    [5.162, -75.307] // Coordenada del límite inferior derecho del Quindío
  ];

  useEffect(() => {
    const leafletMap = mapRef.current;

    if (leafletMap) {
      leafletMap.setMaxBounds(limitesQuindio);
      leafletMap.options.maxZoom = 18; // Ajusta el nivel máximo de zoom permitido
      leafletMap.whenReady(() => {
        leafletMap.fitBounds(limitesQuindio);
      });
    }
  }, []);

  return (
    <MapContainer className="mapView" center={[4.45, -75.60700]} zoom={10} ref={mapRef} maxBounds={limitesQuindio} maxZoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapCrud;
