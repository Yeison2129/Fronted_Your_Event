import React from "react";
import MapCrud from "../Mapa/MapaCrud/MapCrud";
import Crud_eventos from "../CRUD_eventos/Crud_eventos";

const ViewCrudEventos = () => {
  return (
    <div
      className="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "110%",
        height: "50%"
      }}
    >
      <MapCrud>
        <Crud_eventos />
      </MapCrud>
    </div>
  );
};

export default ViewCrudEventos;
