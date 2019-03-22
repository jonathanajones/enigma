import React from 'react';

import Rotor from './Rotor.js';

export default class RotorBlock extends React.Component {
  render() {
    return (
      <div>
        <div className='rotor-block'>
          <Rotor RotorId='1' />
          <Rotor RotorId='2' />
          <Rotor RotorId='3' />
        </div>
        <div className='rotor_controls'>
          <button onClick={this.handlePrevious}>⇐prev</button>
          <button onClick={() => {console.log(this.rotor);}}>log</button>
          <button onClick={this.handleNext}>next⇒</button>
        </div>
      </div>
    );
  }
}
