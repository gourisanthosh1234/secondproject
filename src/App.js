import { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Page from './components/Page';
import StateEffect from './components/StateEffect';


function App() {
  return (
    <div className="App">
      {/* <Sample/> */}
      {/* <SampleArray/> */}
      {/* <StateBasics/> */}
       <Page/> 
      {/* <Counter/> */}
      <StateEffect/>
    </div>
  );
}

export default App;
