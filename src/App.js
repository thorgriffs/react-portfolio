import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename='/react-portfolio'>
      <div className="App">
        {/* <header className="App-header"> */}
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
          <Footer />
        {/* </header> */}
      </div>
    </Router>
  );
}

export default App;