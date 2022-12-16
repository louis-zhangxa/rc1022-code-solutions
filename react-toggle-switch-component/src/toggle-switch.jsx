import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.props.clicked = false;
    this.state = { class: 'toggle off' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const status = this.props.clicked;
    if (!status) {
      this.props.clicked = true;
      this.setState({ class: 'toggle on' });
    } else {
      this.props.clicked = false;
      this.setState({ class: 'toggle off' });
    }
  }

  render() {
    return (
      <div className='flex'>
        <div className={this.state.class}>
          <button onClick={this.handleClick}></button>
        </div>
        <div className="textarea">
          <p>{this.props.clicked ? 'ON' : 'OFF'}</p>
        </div>
      </div>
    );
  }
}

export default Toggle;
