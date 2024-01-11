import React from "react";
import "../App.css";
import { Button } from "@mui/joy";

function Nextone({ temp, description, icon, settemp, seticon }) {
  return (
    <div className="Home-one">
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
      <img src={icon} alt="Weather Icon" />

      <Button onClick={() => seticon("")}>back</Button>
    </div>
  );
}

export default Nextone;
