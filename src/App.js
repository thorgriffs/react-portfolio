import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={About} />
          
        </header>
      </div>
    </Router>
  );
}

export default App;
