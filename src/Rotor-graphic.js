import React from 'react';

// Rotor design and rotation function adapted from Carousel - dynamic
// by Dave DeSandro
// https://codepen.io/desandro/pen/wjeBpp

let wrap = (a, b) => (a % b + b) % b;

export default class Rotor extends React.Component {
  constructor(props) {
    super(props)
    this.carousel = React.createRef();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.cellCount = 26;
    this.state = {
      selectedIndex: 0
    };
  }

  handleNext() {
    const idx = this.state.selectedIndex + 1;
    this.setState({selectedIndex: idx}, ()=> {
      this.carousel.current.children[wrap(idx + 3, this.cells.length)].style.opacity = 1;
      this.carousel.current.children[wrap(idx - 4, this.cells.length)].style.opacity = .2;
      this.rotateCarousel();
    });
  }

  handlePrevious() {
    const idx = this.state.selectedIndex - 1;
    this.setState({selectedIndex: idx}, ()=> {
      this.carousel.current.children[wrap(idx - 3, this.cells.length)].style.opacity = 1;
      this.carousel.current.children[wrap(idx + 4, this.cells.length)].style.opacity = .2;
      this.rotateCarousel();
    });
  }

  rotateCarousel() {
    const angle = this.theta * this.state.selectedIndex * -1;
    this.carousel.current.style.transform = 'translateZ(' + -this.radius + 'px) ' +
    'rotateX(' + angle + 'deg)';
  }

  componentDidMount() {
    this.cells = this.carousel.current.children;
    this.cellHeight = this.carousel.current.offsetHeight;
    this.radius = Math.round((this.cellHeight / 2) / Math.tan(Math.PI / this.cellCount));
    this.theta = 360 / this.cellCount;
    for (let i = 0; i < this.cells.length; i++) {
      let cell = this.cells[i];
      if (i <= 3 || i >= this.cells.length - 3)
        cell.style.opacity = 1;
      else
        cell.style.opacity = 0.2;
      let cellAngle = this.theta * i;
      cell.style.transform = 'rotateX(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
    }
  }

  render() {
    const letters = [...Array(this.cellCount).keys()].map(
      (num) => {
        // 65 = A; 97 = a
        const letter = String.fromCharCode(65+num);
        return (
          <div className='rotor__cell' id={this.props.RotorId + letter} key={this.props.RotorId + letter}>{letter}</div>
        );
      });
    return (
      <div className='rotor_selected'>
        <div className='rotor' ref={this.carousel}>
          {letters}
        </div>
        <div className='rotor_controls'>
          <button onClick={this.handlePrevious}>⇐prev</button>
          <button onClick={() => {console.log(this.carousel);}}>log</button>
          <button onClick={this.handleNext}>next⇒</button>
        </div>
      </div>
    );
  }
}
