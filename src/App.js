import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import resumeData from './resumeData';
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header resumeData={resumeData} />
            <About />
            <Experience resumeData={resumeData} />
            <Portfolio resumeData={resumeData} />
            <Skills />
            <Contact />
        </div>
    );
  }
}

export default App;