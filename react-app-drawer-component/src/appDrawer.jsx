import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { class: 'column-full modal hidden' };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({ class: 'column-full modal' });
  }

  hideMenu() {
    this.setState({ class: 'column-full modal hidden' });
  }

  render() {
    return (
      <div className="column-full">
        <i className="fa-solid fa-bars fa-3x" onClick={this.showMenu}></i>
        <div className={this.state.class}>
          <div className="col-20">
            <h1>Menu</h1>
            <h3>About</h3>
            <h3>Get Statred</h3>
            <h3>Sign In</h3>
          </div>
          <div className="col-80" onClick={this.hideMenu}></div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
