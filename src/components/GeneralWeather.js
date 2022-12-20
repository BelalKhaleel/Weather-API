import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "../App.css";

class GeneralWeather extends React.Component {
    render () {
        return (
        <div className="weather_changes">
          <article>
            <time>{this.props.timarray[0]}</time>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>{this.props.tempparray[0]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[1]}</time>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>{this.props.tempparray[1]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[2]}</time>
            <img src={clear} alt="clear weather icon" />
            <span>{this.props.tempparray[2]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[3]}</time>
            <img src={clear} alt="clear weather icon" />
            <span>{this.props.tempparray[3]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[4]}</time>
            <img src={clear} alt="clear weather icon" />
            <span>{this.props.tempparray[4]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[5]}</time>
            <img src={clear} alt="clear weather icon" />
            <span>{this.props.tempparray[5]}&deg;C</span>
          </article>
          <article>
            <time>{this.props.timarray[6]}</time>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>{this.props.tempparray[6]}&deg;C</span>
          </article>
        </div>
        );
    }
}

export default GeneralWeather;