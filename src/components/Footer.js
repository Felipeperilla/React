import React, { Component } from 'react';
import './web/css/Footer.css';

import propTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copy: propTypes.string.isRequired
    //si desea tomar la propiedad de este componente eliminar isRequired porque de lo contrario siempre pedira la propiedad en App ""
  }
  render() {
    
    const { copy = 'valor undefined' } = this.props;
    return (
        <footer>
          {copy}
        </footer>
    );
  }
}

export default Footer;