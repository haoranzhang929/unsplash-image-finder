import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
