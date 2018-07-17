import React, { Component } from 'react';
import './App.css';
import Quiz from './components/quiz'
import GuestSpace from './components/guestspace'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" render={(props) => (
            <div className='App'  >
              <Quiz  />
            </div>
          )} />

          <Route exact path="/quiz" render={(props) => (
            <div className='App'  >
              <Quiz  />
            </div>
          )} />

          <Route exact path="/room/:room" render={(props) => (
            <div className='App'  >
              <GuestSpace room={props.match.params.room} {...props}  />
            </div>
          )} />

          <Route exact path="/test/quiz" render={(props) => (
            <div className='App-debug'  >
              <Quiz  />
            </div>
          )} />

          <Route exact path="/test/room/:room" render={(props) => (
            <div className='App-debug'  >
              <GuestSpace room={props.match.params.room} {...props}  />
            </div>
          )} />


        </div>
      </Router>

    );
  }
}

export default App;
