import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
