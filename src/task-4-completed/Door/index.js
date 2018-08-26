import React from "react";
import "./door.css";

const Door = ({open}) => {
  const className = open ? "door doorOpen": "door"
  return (
  <div className="wholeDoor">
    <div className={className}/>
  </div>
)};

export default Door;
