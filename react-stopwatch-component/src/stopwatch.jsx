import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.props.time = 5;
    this.state = { class: 'fa-solid fa-play fa-4x' };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.class === 'fa-solid fa-play fa-4x') {
      this.countdown = setInterval(() => {
        this.props.time--;
        // console.log(this.props.time);
        if (this.props.time === 0) {
          clearInterval(this.countdown);
          this.props.time = 5;
          this.setState({ class: 'fa-solid fa-play fa-4x' });
        }
      }, 1000);
    } else if (this.state.class === 'fa-solid fa-pause fa-4x') {
      clearInterval(this.countdown);
      // console.log(this.props.time);
    }

    if (this.state.class === 'fa-solid fa-play fa-4x') {
      this.setState({ class: 'fa-solid fa-pause fa-4x' });
    } else if (this.state.class === 'fa-solid fa-pause fa-4x') {
      this.setState({ class: 'fa-solid fa-play fa-4x' });
    }
  }

  reset() {
    clearInterval(this.countdown);
    this.props.time = 5;
    this.setState({ class: 'fa-solid fa-play fa-4x' });
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.time);
  //   if (this.props.time !== prevProps.time) {
  //     this.fetchData(this.props.time);
  //   }
  // }

  render() {
    return (
      <div>
        <div onClick={this.reset} className="round">
          <h1>{this.props.time}</h1>
        </div>
        <div className="text">
          <i onClick={this.handleClick} className={this.state.class}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
