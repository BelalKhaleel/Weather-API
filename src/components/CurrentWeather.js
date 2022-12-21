import React, { Component } from "react";

class CurrentWeather extends React.Component {
    render() {
        return (
        <div className="current_weather">
            <img src={this.props.imagechange(this.props.FakeWeatherNow.weather[0].main.toLowerCase())} alt="weather icon" />
            <figcaption>{this.props.FakeWeatherNow.weather[0].description}</figcaption>
            <p className="temperature"><span><b>Temperature</b></span>  {Math.round(this.props.FakeWeatherNow.main.temp_min - 273.15)}&deg;C to  {Math.round(this.props.FakeWeatherNow.main.temp_max - 273.15)}&deg;C</p>
            <p className="humidity&pressure"><span><b>Humidity</b></span> {this.props.FakeWeatherNow.main.humidity}% <span><b>Pressure</b></span> {this.props.FakeWeatherNow.main.pressure}</p>
        </div>
        )
    }
}

export default CurrentWeather;