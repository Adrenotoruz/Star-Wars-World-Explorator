import React, { Component } from 'react';
import 'regenerator-runtime/runtime';
import DataSelector from '../components/DataSelector';
import DataDisplay from '../components/DataDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataOption: "planets",
      optionNumber: 1,
      isDataFetched: null,
      fetchedJson: null
    }
  }

  updateStatewithFetchedData = async (dataOption, optionNumber) => {
    this.setState({isDataFetched: false})
    const fetchData = await fetch(`https://swapi.dev/api/${dataOption}/${optionNumber}/`)
    const fetchDataToJson = await fetchData.json();
    this.setState({
      fetchedJson: fetchDataToJson,
      isDataFetched: true
    });
  }

  takeDataOptionOnSubmit = (event) => {
    event.preventDefault();
    const filterFormElementValue = (optionName) => {
      const formArray =  Array.prototype.slice.call(event.target);
      return formArray
      .filter(formElement => formElement.name === optionName)
      .map(formElement => formElement.value)[0];
    }    
    this.setState({
      dataOption: filterFormElementValue("dataOption"),
      optionNumber: filterFormElementValue("optionNumber")
    }, () => {
      this.updateStatewithFetchedData(this.state.dataOption, this.state.optionNumber)
    })   
  }

componentDidMount(){
  this.updateStatewithFetchedData("planets", 1)
}

  render() {
    const load = this.state.isDataFetched;
    return (
      <div id = "cuosik" className="App stars">
        <div className="twinkling">
          <DataSelector dataOptionOnSubmit = {this.takeDataOptionOnSubmit} />
          {load
            ? <DataDisplay fetchedDataInJson = {this.state.fetchedJson} /> 
            : <h1>Please Wait</h1> 
          } 
        </div> 
      </div>
    );
  }
}

export default App;

