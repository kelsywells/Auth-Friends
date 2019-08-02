import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import login from './login';



function App() {
  return (
    <div className="App">
      <Route path="/login.js" component={login}/>
      <Link to="/login.js"> Login Here</Link>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);

export default App;
