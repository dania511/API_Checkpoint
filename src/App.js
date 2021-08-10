
import './App.css';
import React from "react";
import User_list from "./Components/User_list.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Switch>
        <Route path="/" component={User_list} />
      </Switch>
    
      </header>
    </div>
  );
}

export default App;
