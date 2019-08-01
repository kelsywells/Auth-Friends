import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-dom';
import login from './login';


function App() {
  return (
    <div className="App">
      <Link to="/login.js"> Login Here</Link>
      <Route path="/login.js" component={login}/>
    </div>
  );
}

export default App;
