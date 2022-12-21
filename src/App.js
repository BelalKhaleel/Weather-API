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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: [],
      isFetched: false
    };
  }

  // ApiKey = 'fb545491965ee59f8bb567e7cba45a6a'
  // url = `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${this.ApiKey}`
  // handleInputChange = (value) => {
  //   this.setState({name: value})
  // }
  // handleClick(e){
  //   let ApiKey = 'fb545491965ee59f8bb567e7cba45a6a'
  //   let link = `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${this.ApiKey}`
  //   fetch(link)
  //   .then(response=>response.json())
  //   .then(response=>{
  //     this.setState({
  //       data: response.list,
  //       isFetched: true
  //     })
  //     console.log(response.list)
  //   })
  // };


  getCityWeather(city) {
    try {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=fb545491965ee59f8bb567e7cba45a6a`)
    .then(res => {
      return res.json()
    })
    .then(jsonified => {
      console.log(jsonified)
      if(jsonified.cod === "400" || jsonified.cod === "404") {
        this.setState({error: jsonified.message, isLoaded: false})
      } else {
        this.setState({isLoaded: true, weatherObj: jsonified, error: null})
      }
    })
    } catch (error) {
      console.error(error)
      this.setState({error: error, isLoaded: false})
    }
  }
  }

  render() {
    const imagechange = (id) => {
      switch (true) {
        case (id < 300):
          return storm;
        case (300 <= id && id < 500):
          return drizzle;
        case (500 <= id && id < 600):
          return rain;
        case (600 <= id && id < 700):
          return snow;
        case (700 <= id && id < 800):
          return fog;
        case (id == 800):
          return clear;
        case (id == 801):
          return partlycloudy;
        case (801 < id && id <= 805):
          return mostlycloudy;
        default:
          return  
      }
    };
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
}
export default App;
