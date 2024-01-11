import { Button } from "@mui/joy";
import { TextField } from "@mui/material";
import React from "react";

function Home({ Input, setInput, weather }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    weather();
  };

  return (
    <div className="inputbox">
      <div className="inputfield">
        <form>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={handleChange}
            value={Input}
          />
          <br />

          <Button onClick={handleClick}> Get Weather</Button>
        </form>
      </div>
    </div>
  );
}

export default Home;
