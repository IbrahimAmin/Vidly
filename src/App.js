import React, { Component } from "react";
import Movies from "./componenets/movies";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
