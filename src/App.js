import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "axios";
import Nextone from "./components/Nextone";

function App() {
  const [Input, setInput] = useState();
  const [temp, settemp] = useState();
  const [description, setdescription] = useState();
  const [icon, seticon] = useState();

  const weather = async () => {
    // api keys
    const apiKey = "9be57619512e7679795ecb9b4de4dab7";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      Input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;

    try {
      const response = await axios.get(url);
      console.log("API Response:", response.data); // Log the entire response for inspection

      const temp = response.data.main.temp;
      const description = response.data.weather[0].description;
      const icon = response.data.weather[0].icon;
      const imgurl = "https://openweathermap.org/img/w/" + icon + ".png";
      console.log("Weather Data:", temp, description, imgurl);

      // Update state variables
      settemp(temp);
      setdescription(description);
      seticon(imgurl);
      setInput("");
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="inputbox">
      <div className="inputfield">
        <h1 style={{ backgroundColor: "green" }}>Google weather app</h1>
        <h2>powerd by</h2>
        <img
          src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
          style={{
            width: "15%",
            paddingBottom: "40px",
            paddingTop: "20px",
          }}
        />
        {icon === "" ? (
          <div>
            <Home Input={Input} setInput={setInput} weather={weather} />
          </div>
        ) : (
          <Nextone
            temp={temp}
            description={description}
            icon={icon}
            settemp={settemp}
            seticon={seticon}
          />
        )}

        {/* Display weather information */}
        {/* {temp && description && icon && (
        <div>
          <p>Temperature: {temp}°C</p>
          <p>Description: {description}</p>
          <img src={icon} alt="Weather Icon" />
        </div>

        
      )} */}
      </div>
    </div>
  );
}

export default App;
