import React, { Component } from 'react';
import './web/css/Body.css';

class Body extends Component {
  constructor(){
    super();
  
    this.state = {
      count: 1
    };

    this.handleAccountant = this.handleAccountant.bind(this);
  }

  handleAccountant(e){
    if(e.target.id === "add"){
      this.setState({
        count: this.state.count + 1
      });
    }else if(e.target.id === "subtract" && this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
    }else{
      this.setState({
        count: 0
      });
    }
  }
  render() {  

    return (
    <div className="Body-intro">              
        <p className="Body-description">
        </p>
        <button id="add" onClick={this.handleAccountant}>+</button>
        <button id="subtract" onClick={this.handleAccountant}>-</button>
        <button id="reset" onClick={this.handleAccountant}>Reset</button>
        <h1>Count: {this.state.count}</h1>
    </div>
    );
  }
}

export default Body;


