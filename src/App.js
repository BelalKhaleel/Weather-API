import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       <header className="app__header">
        <input type="text" placeholder="Type in a city name"/>
       <button>FIND WEATHER</button>
       </header>
       <main className="app__main">
        <div className="general_weather">
        <img src="https://placekitten.com/150/150" alt="these kittens" />
        <figcaption>overcast clouds</figcaption>
        <p className="temperature"><span><b>Temperature</b></span>  10&deg; to  11&deg;C</p>
        <p className="humidity&pressure"><span><b>Humidity</b></span> 78% <span><b>Pressure</b></span> 100.48</p>
        </div>
        <div className="weather_changes">
          <article>
            <span>03:00</span>
            <img src="https://placekitten.com/100/150" alt="those kittens" />
            <span>8&deg;C</span>
          </article>
          <article>
            <span>06:00</span>
            <img src="https://placekitten.com/100/150" alt="kittens" />
            <span>9&deg;C</span>
          </article>
          <article>
            <span>09:00</span>
            <img src="https://placekitten.com/100/150" alt="these kittens" />
            <span>14&deg;C</span>
          </article>
          <article>
            <span>12:00</span>
            <img src="https://placekitten.com/100/150" alt="these kittens" />
            <span>17&deg;C</span>
          </article>
          <article>
            <span>15:00</span>
            <img src="https://placekitten.com/100/150" alt="these kittens" />
            <span>18&deg;C</span>
          </article>
          <article>
            <span>18:00</span>
            <img src="https://placekitten.com/100/150" alt="these kittens" />
            <span>16&deg;C</span>
          </article>
          <article>
            <span>21:00</span>
            <img src="https://placekitten.com/100/150" alt="these kittens" />
            <span>13&deg;C</span>
          </article>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
