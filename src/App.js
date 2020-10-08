import React from 'react';
import Header from './components/header.js';
import AboutMe from './components/aboutme.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import './assets/styles/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>

          <Route path="/experience">
            <Header/>
            <Experience />
          </Route>
          <Route path="/project">
            <Header/>
            <Projects />
          </Route>
          <Route path="/art">
            <Header/>
            <Projects />
          </Route>
          <Route path="/">
            <Header/>
            <AboutMe />

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
