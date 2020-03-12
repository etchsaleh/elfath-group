import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbars extends Component {
    constructor(props) {
        super(props)
        this.state = { isScrolled:"false" };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (e) => {
        const scrolled = window.scrollY > 70 ? true : false;
        this.setState({ isScrolled: !scrolled });
    }

    render() {
        return(
            <>
            <div className={`navbars d-flex justify-content-between ${this.state.isScrolled ? "nav-light" : "nav-dark"}`} >
                <Link to="/" className={`logo ${this.state.isScrolled ? "nav-light" : "nav-dark"}`}>
                    <div className="navbrand">
                        <img style={{marginRight:"0.5rem", marginBottom:"4px"}}
                            alt="..."
                            src={require("../fath.png")}
                            width="20"
                        />
                        ElFath Group LLC
                    </div>
                </Link>
                <div>
                    <NavLink to="/our-company" activeStyle={{color: "#083597"}} className={`navlink link ${this.state.isScrolled ? "nav-light" : "nav-dark"}`}>Our Company</NavLink>
                    <NavLink to="/business-areas" activeStyle={{color: "#083597"}} className={`navlink link ${this.state.isScrolled ? "nav-light" : "nav-dark"}`}>Business Areas</NavLink>
                    <NavLink to="/csr" activeStyle={{color: "#083597"}} className={`navlink link ${this.state.isScrolled ? "nav-light" : "nav-dark"}`}>Corporate Social Responsibility</NavLink>
                    <NavLink to="/contact" activeStyle={{color: "#083597"}} className={`navlink link ${this.state.isScrolled ? "nav-light" : "nav-dark"}`}>Contact</NavLink>
                </div>
            </div>
            </>
        );
    }
}