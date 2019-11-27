import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  callReactNative = () => {
    window.postMessage('mensagem de teste');    
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.callReactNative}>Call react-native</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
