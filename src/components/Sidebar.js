import React from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Menu
        className="sidebar"
        right
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <NavLink
          to="/our-company"
          activeStyle={{ color: "#14191f" }}
          className="link side-link shadow-none"
          onClick={() => this.closeMenu()}
        >
          Our Company
        </NavLink>
        <NavLink
          to="/business-areas"
          activeStyle={{ color: "#14191f" }}
          className="link side-link"
          onClick={() => this.closeMenu()}
        >
          Business Areas
        </NavLink>
        <NavLink
          to="/csr"
          activeStyle={{ color: "#14191f" }}
          className="link side-link"
          onClick={() => this.closeMenu()}
        >
          Corporate Social Responsibility
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={{ color: "#14191f" }}
          className="link side-link"
          onClick={() => this.closeMenu()}
        >
          Contact
        </NavLink>
      </Menu>
    );
  }
}
