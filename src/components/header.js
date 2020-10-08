import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

class Header extends React.Component {
  render() {
    return (
        <nav class="navbar">
            <div class="left-container">
                <a class="navbar-brand logo" href="/">Sara Hosseini</a>
            </div>
            <div class="right-container">
                <Link to='experience' className={"navbar-brand"}>Work</Link>
                <Link to='project' className={"navbar-brand"}>Projects</Link>
                <Link to='art' className={"navbar-brand"}>Art</Link>
                <Link to='/' className={"navbar-brand"}>About + Connect</Link>
            </div>
        </nav>
    )
  }
}

export default Header