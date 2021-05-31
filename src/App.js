import Header from './components/Header'
import OCR from './components/OCR'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import React, {Component} from 'react';
import DirSelect from './components/DirSelect';
import Cards from './components/Cards';

class App extends Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
          <Route exact path="/">
            <Header/>
           
          </Route>
          <Route exact path="/search">
            <Header/>
           <Cards/>
          </Route>
          <Route exact path="/ocr">
            <Header/>
           <DirSelect/>
          </Route>
          <Route exact path="/ocr/:id">
            <Header/>
           <OCR/>
          </Route>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
