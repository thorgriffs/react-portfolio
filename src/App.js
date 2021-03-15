import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
