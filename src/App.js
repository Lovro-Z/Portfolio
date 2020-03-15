import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Contact from "./components/main/contact/Contact";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/main/home/Home";
import About from "./components/main/about/About";
import Data from "./components/main/data/Data";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/data" component={Data}/>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
