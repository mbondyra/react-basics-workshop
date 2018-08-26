import React from "react";
import "./potions.css";
import bottle from "./bottle.png";

const Potion = ({color = "black", label = "Mistical"}) => (
  <div className="potion">
    <img src={bottle} alt="bottle" />
    <div className="liquid" style={{ background: color }} />
    <div className="label">{label}</div>
  </div>
);

export default Potion;
