import React,{Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from "./components/Input";
import Clear from "./components/Clear";
import * as maths from 'mathjs';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      input: ""
    };
  }

  addInput = val =>{
   return this.setState({input: this.state.input + val})
  };
  
  handleTotal = val =>{
    return this.setState({ input: maths.evaluate(this.state.input)})
  }

  render(){
  return(
  <div className="App">
  <div className="calculator_wrap">
    <div className = "row">
      <Input input={this.state.input}></Input>
    </div>

    <div className = "row">
      <Button buttonHandler={this.addInput}>7</Button>
      <Button buttonHandler={this.addInput}>8</Button>
      <Button buttonHandler={this.addInput}>9</Button>
      <Button buttonHandler={this.addInput}>*</Button>
    </div>
    <div className = "row">
      <Button buttonHandler={this.addInput}>4</Button>
      <Button buttonHandler={this.addInput}>5</Button>
      <Button buttonHandler={this.addInput}>6</Button>
      <Button buttonHandler={this.addInput}>-</Button>
    </div>
    <div className = "row">
      <Button buttonHandler={this.addInput}>1</Button>
      <Button buttonHandler={this.addInput}>2</Button>
      <Button buttonHandler={this.addInput}>3</Button>
      <Button buttonHandler={this.addInput}>+</Button>
    </div>
    <div className = "row">
        <Button buttonHandler={this.addInput}>.</Button>
        <Button buttonHandler={this.addInput}>0</Button>
        <Button buttonHandler={() => this.handleTotal()}>=</Button>
        <Button buttonHandler={this.addInput}> /</Button>
      </div>
      <div className = "row">
        <Clear handleClear={() => this.setState({input: ""})}></Clear>
      </div>
    </div>
  </div>)
  }

}

export default App;
