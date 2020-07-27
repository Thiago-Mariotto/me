import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import {Helmet} from "react-helmet";

const TITLE = 'Thiago Mariotto'

class App extends Component {
  render() {
    return (

            

      <div id="colorlib-page">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Thiago Mariotto</title>
            </Helmet>
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				  <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Projects></Projects>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
