import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CodeCloud | the browser IDE</h1>
        </header>
        <Editor />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
