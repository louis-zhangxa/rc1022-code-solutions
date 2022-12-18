import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { username: '', password: '' };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(`username: ${this.state.username}, password ${this.state.password}`);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label htmlFor="">
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        </label>
        <label htmlFor="">
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} autoComplete="off"/>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const $container = document.querySelector('#root');
const root = ReactDOM.createRoot($container);

root.render(<RegistrationForm />);
