import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const EnvioLatLng = React.createContext({
  markerPosition: [4.45, -75.607],
  setMarkerPosition: () => {},
  setValues: () => {},
});

const MapCrud = ({ children }) => {
  const mapRef = useRef(null);
  const limitesQuindio = [
    [3.995, -76.218], // Coordenada del límite superior izquierdo del Quindío
    [4.862, -75.307] // Coordenada del límite inferior derecho del Quindío
  ];

  const [markerPosition, setMarkerPosition] = useState([4.45, -75.607]);
  const [Latitud, setLatitud] = useState(4.45);
  const [Longitud, setLongitud] = useState(-75.607);
  
  const setValues = (values) => {
    // Implementa la lógica para establecer los valores deseados
    // Aquí puedes actualizar los estados relevantes según tus necesidades
  };
  
  useEffect(() => {
    const leafletMap = mapRef.current;

    if (leafletMap) {
      leafletMap.setMaxBounds(limitesQuindio);
      leafletMap.whenReady(() => {
        leafletMap.fitBounds(limitesQuindio);
      });
    }
  }, []);


  const handleClick = (e) => {
    const { latlng } = e;
    if (latlng) {
      const { lat, lng } = latlng;
      setMarkerPosition([lat, lng]);
      setLatitud(lat);
      setLongitud(lng);
    }
  };

  const MapEvents = () => {
    useMapEvents({
      dblclick: handleClick
    });

    return null;
  };

  return (
    <>
      <EnvioLatLng.Provider value={{ markerPosition, setMarkerPosition, setValues }}>
        {children}
        <MapContainer
          className="mapView"
          center={markerPosition} 
          zoom={11}
          ref={mapRef}
          maxBounds={limitesQuindio}
          minZoom={11}
          doubleClickZoom={false}
          onclick={handleClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapEvents />
          {markerPosition && <Marker position={markerPosition} />}
        </MapContainer>
      </EnvioLatLng.Provider>
    </>
  );
};

export default MapCrud;
