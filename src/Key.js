import React from 'react';

export default class Key extends React.Component {
  render() {
    return (
      <button className='key' id={this.props.letter}>
        {this.props.letter}
      </button>
    );
  }
}
