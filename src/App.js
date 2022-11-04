
import React from 'react'
import Nav from './components/Nav';
import Body from './components/Body';
import Background from './components/Background';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {

  return (
    <div>
          <Nav />
          <Background />
          <Body />
      {/* <Routes>
        <Route exact path='/about-me'><About /></Route>
        <Route exact path='/contact-me'><Contact /></Route>
        <Route exact path='/projects'><Projects /></Route>
        <Route exact path='/'>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
