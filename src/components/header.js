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
                <a class="navbar-brand" href="experience">Work</a>
                <a class="navbar-brand" href="project">Projects</a>
                <a class="navbar-brand" href="art">Art</a>
                <a class="navbar-brand" href="/">About + Connect</a>
            </div>
        </nav>
    )
  }
}

export default Header