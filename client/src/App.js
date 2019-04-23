import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Campaign from './components/Campaign';
import Donate from './components/Donate';


class App extends Component {

render() {
    return (
      <BrowserRouter>  {/*It wraps all route components...*/}
        <div className="App">
          <Navbar />
          <Switch>   {/*Switch property given to us by react-router-dom........as only tag what we require gets loaded others are not*/}
          <Route exact path='/' component={Home} />    {/*Whenever particular route matches which is given then application shows that component*/}
          <Route path='/campaign' component={Campaign} />
          <Route path='/Donate' component={Donate} />      {/* / gives exact path where our data is*/}
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
