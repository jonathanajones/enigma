import React from 'react';

export default class InputBlock extends React.Component {
  render() {
    return (
      <div className='inputblock'>
        Input <input id='entry' onKeyUp={this.props.keyPressHandler}/>
      </div>
    );
  }
}
