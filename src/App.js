import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
