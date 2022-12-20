import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class CurrentWeather extends React.Component {
    render() {
        return (
        <div className="current_weather">
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <figcaption>overcast clouds</figcaption>
            <p className="temperature"><span><b>Temperature</b></span>  {this.props.minTemp}&deg;C to  {this.props.maxTemp}&deg;C</p>
            <p className="humidity&pressure"><span><b>Humidity</b></span> {this.props.humidity}% <span><b>Pressure</b></span> {this.props.pressure}</p>
        </div>
        )
    }
}

export default CurrentWeather;