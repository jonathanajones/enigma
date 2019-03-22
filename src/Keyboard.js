import React from 'react';

import Key from './Key.js';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props)
    this.layout = {
      'qwerty': [
        'qwertyuiop',
        ' asdfghjkl',
        '  zxcvbnm'
      ],
      'dvorak': [
        '    pyfgcrl',
        'aoeuidhtns',
        '   qjkxbmwvz'
      ]
    };
  }

  renderRow(layout, row) {
    return (
      <div className='keyboard-row' key={'row' + row}>
        {row.split('').map((letter, idx) => {
          if (letter === ' ') {
            return (
              <span key={idx} style={{width: 20}}/>
            )
          } else {
            return (
              <Key key={letter} letter={letter} />
            );
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <div className='keyboard'>
        {this.layout[this.props.layout].map((row) => {
          return this.renderRow(this.props.layout, row.toUpperCase())
        })}
      </div>
    );
  }
}
