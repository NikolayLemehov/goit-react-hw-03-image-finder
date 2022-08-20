import React, { Component } from 'react';
import s from './App.module.css'
import Searchbar from './Searchbar/Searchbar';

const apiKey =

class App extends Component {


  render() {
    return (
      <div className={s.container}>
        <Searchbar/>
      </div>
    );
  }
}

export default App;
