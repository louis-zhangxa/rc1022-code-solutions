import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { username: '', password: '', class: 'fa-solid fa-xmark password-empty', message: 'A password is required.' };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password.length < 8) {
      this.setState({ class: 'fa-solid fa-xmark password-wrong' });
      this.setState({ message: 'Your password is too short.' });
    } else if (this.state.password.length > 8) {
      this.setState({ class: 'fa-solid fa-check password-correct' });
      this.setState({ message: '' });
    }
  }

  handleSubmit(event) {
    alert(`username: ${this.state.username}, password ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name='username' value={this.state.username} onChange={this.handleUsernameChange} />
        <label htmlFor='password'>Password:</label>
        <div>
          <input type='password' name='password' value={this.state.password} onChange={this.handlePasswordChange} autoComplete="off" />
          <i className={this.state.class}></i>
        </div>
        <p className="password-empty">{this.state.message}</p>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default ValidatedInput;

// const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

// for (let i = 0; i < this.state.password.length; i++) {
//   if (this.state.password[i] in number) {
//     for (let j = 0; j < this.state.password.length; j++) {
//       if (this.state.password[j] === this.state.password[j].toUpperCase()) {
//         for (let b = 0; b < this.state.password.length; b++) {
//           if (this.state.password[b] in specialCharacter) {
//             this.setState({ class: 'fa-solid fa-check password-correct' });
//             this.setState({ message: '' });
//           }
//         }
//       }
//     }
//   }
// }
