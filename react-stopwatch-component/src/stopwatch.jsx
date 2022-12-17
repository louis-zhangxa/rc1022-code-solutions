import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { time: 0, class: 'fa-solid fa-play fa-4x' };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.class === 'fa-solid fa-play fa-4x') {
      this.setState({ class: 'fa-solid fa-pause fa-4x' });
      this.countdown = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else if (this.state.class === 'fa-solid fa-pause fa-4x') {
      this.setState({ class: 'fa-solid fa-play fa-4x' });
      clearInterval(this.countdown);
    }
  }

  reset() {
    clearInterval(this.countdown);
    this.setState({ time: 0 });
    this.setState({ class: 'fa-solid fa-play fa-4x' });
  }

  render() {
    return (
      <div>
        <div onClick={this.reset} className="round">
          <h1>{this.state.time}</h1>
        </div>
        <div className="text">
          <i onClick={this.handleClick} className={this.state.class}></i>
        </div>
      </div>
    );
  }
}

// componentDidUpdate(prevProps) {
//   console.log(prevProps.time);
//   if (this.props.time !== prevProps.time) {
//     this.fetchData(this.props.time);
//   }
// }

export default Stopwatch;
