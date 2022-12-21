import React from "react";
import "./Search.css";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    city: ""
  };
  this.searchChange = this.searchChange.bind(this)
}
searchChange = (e) => {
  this.setState({city: e.target.value});
}
  render() {
    return (
      <header className="app__header">
        <input type="text" placeholder="Type in a city name"
        onChange={this.searchChange}
        onKeyDown={e => {
            if(e.key == "Enter"){
                this.props.getCityWeather(this.state.city)
            }
        }}/>
       <button type="button" onClick={() => {this.props.getCityWeather(this.state.city);}}>FIND WEATHER</button>
       </header>
    );
  }
}
export default Search;
