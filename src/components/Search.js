import React from "react";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <header className="app__header">
        <input type="text" placeholder="Type in a city name"/>
       <button type="button">FIND WEATHER</button>
       </header>
    );
  }
}
export default Search;
