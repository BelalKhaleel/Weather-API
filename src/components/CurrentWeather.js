import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class CurrentWeather extends React.Component {
    render() {
        return (
        <div className="current_weather">
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <figcaption>overcast clouds</figcaption>
            <p className="temperature"><span><b>Temperature</b></span>  10&deg; to  11&deg;C</p>
            <p className="humidity&pressure"><span><b>Humidity</b></span> 78% <span><b>Pressure</b></span> 100.48</p>
        </div>
        )
    }
}

export default CurrentWeather;