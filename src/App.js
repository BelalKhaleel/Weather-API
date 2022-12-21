import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import rain from "./img/weather-icons/rain.svg";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import GeneralWeather from "./components/GeneralWeather";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather,
      // data: []
    };
  }

  // ApiKey = 'fb545491965ee59f8bb567e7cba45a6a'
  // url = `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${this.ApiKey}`
  // handleInputChange = (value) => {
  //   this.setState({name: value})
  // }
  // componentDidMount(){
  //   fetch(this.url)
  //   .then(response=>response.json())
  //   .then(response=>{
  //     this.setState({
  //       data: response.list
  //     })
  //     console.log(response.list)
  //   })
  // };this.props.FakeWeatherNow.main.maxTemp

  render() {
    const imagechange= function(image){
    switch(image) {
      case "drizzle":
      return drizzle;
      break;
      case "clear":
      return clear;
      break;
      case "cloudy":
      return cloudy;
      break;
      case "fog":
      return fog;
      break;
      case "mostlycloudy":
      return mostlycloudy;
      break;
      case "partlycloudy":
      return partlycloudy;
      break;
      case "rain":
      return rain;
      break;
      case "snow":
      return snow;
      break;
      case "storm":
      return storm;
      break;
    }
    }

    function timearray(FakeWeather){
      let time=[];
      for(let i=5; i<=11; i++){
        time.push(FakeWeather.list[i].dt_txt.slice(11,16))
      }
      return time;
    }

    function temparray(FakeWeather){
      let temperature=[];
      for(let i=5; i<=11; i++){
        temperature.push((FakeWeather.list[i].main.temp -273.15).toFixed())
      }
      return temperature;
    }
    
    return (
      
      <div className="app">
        <Search />
        <CurrentWeather 
          FakeWeatherNow={FakeWeather.list[0]} imagechange={imagechange}
        />
        <main className="app__main">
        <GeneralWeather 
        timarray={timearray(this.state.FakeWeather)}
        tempparray={temparray(this.state.FakeWeather)}
        FakeWeather={FakeWeather} imagechange={imagechange}
        />
        </main>
      </div>
    );
  }
}

export default App;
