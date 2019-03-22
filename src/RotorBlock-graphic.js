import React from 'react';

import Rotor from './Rotor-graphic.js';

export default class RotorBlock extends React.Component {
  render() {
    return (
      <div className='rotor-block'>
        <Rotor RotorId='1' />
        <Rotor RotorId='2' />
        <Rotor RotorId='3' />
      </div>
    );
  }
}
