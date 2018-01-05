import React, { Component } from 'react';
import './web/css/App.css';

//components 
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

//Data
import books from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="I am property validate whit isRequired"  items={books} />
        <Body titleNotice="EL Bello Tormento" descriptionNotice=
        "Aqui se narra la historia de un joven eprendedor con ganas de sacarle el ultimo jugio a su \n sera que esto algun dia va a terminar"/>
        <Footer copy="copyright jejeje"/> 
      </div>
    );
  }
}

export default App;
