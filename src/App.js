import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import GeneralWeather from "./components/GeneralWeather";
import FakeWeather from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather
    };
  }

  render() {
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
          minTemp={((this.state.FakeWeather.list[4].main.temp_min) - 273.15).toFixed(0)}
          maxTemp={((this.state.FakeWeather.list[4].main.temp_max) - 273.15).toFixed(0)}
          humidity={this.state.FakeWeather.list[4].main.humidity}
          pressure={this.state.FakeWeather.list[4].main.pressure}
        />
        <main className="app__main">
        <GeneralWeather 
        // temp3={((this.state.FakeWeather.list[5].main.temp) - 273.15).toFixed(0)}
        // temp6={((this.state.FakeWeather.list[6].main.temp) - 273.15).toFixed(0)}
        // temp9={((this.state.FakeWeather.list[7].main.temp) - 273.15).toFixed(0)}
        // temp12={((this.state.FakeWeather.list[8].main.temp) - 273.15).toFixed(0)}
        // temp15={((this.state.FakeWeather.list[9].main.temp) - 273.15).toFixed(0)}
        // temp18={((this.state.FakeWeather.list[10].main.temp) - 273.15).toFixed(0)}
        // temp21={((this.state.FakeWeather.list[11].main.temp) - 273.15).toFixed(0)}
        timarray={timearray(this.state.FakeWeather)}
        tempparray={temparray(this.state.FakeWeather)}
        />
        </main>
      </div>
    );
  }
}

export default App;
