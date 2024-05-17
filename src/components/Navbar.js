import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarComponents">
        <h1 className="NavbarSymbol">BabelTrip</h1>
        <ul className={`NavbarMenus ${this.state.clicked ? 'slide' : ''}`}>
          <li>
            <a className="NavbarMenu" href="/">
              <i className="fa-solid fa-house-chimney"></i>Home
            </a>
          </li>
          <li>
            <a className="NavbarMenu" href="/about">
              <i className="fa-solid fa-info"></i>About
            </a>
          </li>
          <li>
            <a className="NavbarMenu" href="/service">
              <i className="fa-solid fa-briefcase"></i>Nature
            </a>
          </li>
          <li>
            <a className="NavbarMenu" href="/destination">
              <i className="fa-solid fa-phone"></i>destination
            </a>
          </li>
          <li>
            <a className="NavbarMenu" href="/signup">
              <i className="fa-solid fa-right-to-bracket"></i>Sign Up
            </a>
          </li>
        </ul>
        <ul className="NavRight">
          <li>
            <a className="Language" href="/language">
              <i className="fa-solid fa-globe"></i>
            </a>
          </li>
          <li>
            <div id="Icon" onClick={this.handleClick}>
              <i
                id="Bar"
                className={
                  this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars"
                }
              ></i>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
