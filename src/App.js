import React, { Component } from 'react';
import Keyboard from './Keyboard.js';
import RotorBlock from './RotorBlock.js';
import InputBlock from './InputBlock.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'qwerty',
      pressed: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLayoutChange = this.handleLayoutChange.bind(this);
  }

  handleKeyPress(c) {
    //65-90 A-Z
    if (c.keyCode >= 65 && c.keyCode <= 90) {
      const letter = String.fromCharCode(c.keyCode);
      this.setState({pressed: letter});
      document.getElementById(letter).classList.add('lit');
      setTimeout(()=>{document.getElementById(letter).classList.remove('lit');}, 250);
    }
  }

  handleLayoutChange(e) {
    this.setState({layout:e.target.value})
  }

  render() {
    return (
      <div>
        <Keyboard light={this.state.pressed} layout={this.state.layout}/>
        <RotorBlock />
        <InputBlock keyPressHandler={this.handleKeyPress} />
        <div className='optionsblock'>
          <label htmlFor='layout-select'>Keyboard layout</label>
          <select id="layout-select" onChange={this.handleLayoutChange} value={this.state.layout}>
            <option value='qwerty'>QWERTY</option>
            <option value='dvorak'>Dvorak</option>
          </select>
          <input value={this.state.pressed} size='1' readOnly />
        </div>
      </div>
    );
  }
}

export default App;
