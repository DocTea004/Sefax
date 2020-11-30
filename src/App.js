import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from "./Containers/Home/Home";
import Cameras from "./Containers/Camera/Cameras";
import About from "./Containers/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"

import "./App.css";


function App() {
  return (
    <React.Fragment>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/Cameras" component={Cameras}  />
        <Route exact path="/About" component={About}  />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
