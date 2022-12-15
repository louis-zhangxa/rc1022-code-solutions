import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.props.clickCount = 0;
    this.state = { class: 'hot-button cold' };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.class}>Hot Button</button>
    );
  }

  handleClick() {
    const clicked = this.props.clickCount++;
    if (clicked < 4) {
      this.setState({ class: 'hot-button cold' });
    } else if (clicked < 7) {
      this.setState({ class: 'hot-button cool' });
    } else if (clicked < 10) {
      this.setState({ class: 'hot-button tepid' });
    } else if (clicked < 13) {
      this.setState({ class: 'hot-button warm' });
    } else if (clicked < 16) {
      this.setState({ class: 'hot-button hot' });
    } else if (clicked > 16) {
      this.setState({ class: 'hot-button nuclear' });
    }
  }
}

export default HotButton;
