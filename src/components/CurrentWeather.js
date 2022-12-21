import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class CurrentWeather extends React.Component {
    render() {
        console.log(this.props.FakeWeatherNow.main.minTemp);
        return (
        <div className="current_weather">
            <img src={this.props.imagechange(this.props.FakeWeatherNow.weather[0].main.toLowerCase())} alt="mostly cloudy icon" />
            <figcaption>overcast clouds</figcaption>
            <p className="temperature"><span><b>Temperature</b></span>  {Math.round(this.props.FakeWeatherNow.main.temp_min - 273.15)}&deg;C to  {Math.round(this.props.FakeWeatherNow.main.temp_max - 273.15)}&deg;C</p>
            <p className="humidity&pressure"><span><b>Humidity</b></span> {this.props.FakeWeatherNow.main.humidity}% <span><b>Pressure</b></span> {this.props.FakeWeatherNow.main.pressure}</p>
        </div>
        )
    }
}

export default CurrentWeather;