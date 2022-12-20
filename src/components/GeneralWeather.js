import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

class GeneralWeather extends React.Component {
    render () {
        return (
        <div className="weather_changes">
          <article>
            <span>03:00</span>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>8&deg;C</span>
          </article>
          <article>
            <span>06:00</span>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>9&deg;C</span>
          </article>
          <article>
            <span>09:00</span>
            <img src={clear} alt="clear weather icon" />
            <span>14&deg;C</span>
          </article>
          <article>
            <span>12:00</span>
            <img src={clear} alt="clear weather icon" />
            <span>17&deg;C</span>
          </article>
          <article>
            <span>15:00</span>
            <img src={clear} alt="clear weather icon" />
            <span>18&deg;C</span>
          </article>
          <article>
            <span>18:00</span>
            <img src={clear} alt="clear weather icon" />
            <span>16&deg;C</span>
          </article>
          <article>
            <span>21:00</span>
            <img src={mostlycloudy} alt="mostly cloudy icon" />
            <span>13&deg;C</span>
          </article>
        </div>
        );
    }
}

export default GeneralWeather;