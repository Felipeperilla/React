import React, { Component } from 'react';

//Assets
import logo from './web/images/logo.svg';
import './web/css/Header.css';

import propTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
      items: propTypes.array.isRequired,
      title: propTypes.string.isRequired      
    }
    render() {
      const items = this.props.items;
      const title = this.props.title;      
      //const clock = this.props.clock;
// Equivalentes ¡'const { title, items} = this.props;

      console.log(this.props);
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          <ul className="menu_descente">
            {items && items.map((item, key) => <li className="properties" key={key}>Libro, Autor: {item.title}{item.url} </li>)}
          </ul>
        </header>
      );
    }
}

export default Header;
