import React from 'react';
import Header from './components/header.js';
import AboutMe from './components/aboutme.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import './assets/styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/art">
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
