import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './web/css/Body.css';

class Body extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      count: 1,
      total: 0
    };

    this.handleAccountant = this.handleAccountant.bind(this);  
    this.handleCalculator = this.handleCalculator.bind(this);
  }
  // componentDidMount(){
  //   this.setState({
  //     count: 5
  //   });
  // }
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

  handleCalculator(e){
    var number1 = ReactDOM.findDOMNode(this.refs.num1).value;
    var number2 = ReactDOM.findDOMNode(this.refs.num2).value;
    
    var total = sumar(number1,number2);

    ReactDOM.findDOMNode(this.refs.value).innerHTML = total

    this.setState({
      total: total
    });

    sumar(number1,number2);

    function sumar(num1,num2){
      return Number(num1) + Number(num2);
    }
  }
  render() {  
    console.log("value count:" + this.state.count)
    console.log("value total suma:" + this.state.total)
    return (
      
    <div className="Body-intro">
        
        <button className="button" id="add" onClick={this.handleAccountant}>+</button>
        <button className="button" id="subtract" onClick={this.handleAccountant}>-</button>
        <button className="button" id="reset" onClick={this.handleAccountant}>Reset</button>
        <h1>Count: {this.state.count}</h1>
        
        <div>
          <input type="number" id="num1" ref = "num1"/>
          <input type="number" id="num2" ref = "num2"/>
          <input type="button" value="=" id="" onClick={this.handleCalculator}/>
          <h1 ref="value">value</h1>
        </div>
        
       
    </div>
    );
  }
}

export default Body;


