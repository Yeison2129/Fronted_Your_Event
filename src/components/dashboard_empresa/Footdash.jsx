import React from 'react'
import './dashboard.css'
import camaleon from "../../assets/logos/logo-gris.svg";

export const Footdash = () => {
  return (
    <footer className="foo-dash">
    <div className="page-footer">
        <span>YourEvent </span>
    <img id='logo-camaleon' src={camaleon} alt="" />
    </div>
</footer>
  )
}
