import React from "react";
import "./App.css";
import Jkga from "./components/JKGA/Jkga";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import One from "./components/One/One";
import NurseryA from "./components/NurseryA/NurseryA";
import PlayNursery from "./components/PlayNursery/PlayNursery";
import KG from "./components/KG/KG";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Jkga} />
        <Route exact path="/one" component={One} />
        <Route exact path="/nurserya" component={NurseryA} />
        <Route exact path="/playnursery" component={PlayNursery} />
        <Route exact path="/kg" component={KG} />
      </Switch>
    </Router>
  );
};

export default App;
