import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header resumeData={resumeData}/>
          <About />
          <Work />
          <Experience />
          <Contact />
        </div>
    );
  }
}

export default App;