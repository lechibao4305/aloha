import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterURL from './Components/User/RouterURL';
function App() {
  return (
    <React.Fragment>
      <Router>
        <RouterURL />
      </Router>
    </React.Fragment>
  )
}

export default App;