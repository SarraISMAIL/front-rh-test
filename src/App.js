
import './App.css';
import React from 'react';
import {Switch} from 'react-router-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import home from './pages/home';
import header from './components/header';







function App() {
  return (
    

    <Router>
   
      <Switch>
        <Route path="/" component={home} exact />
       
      </Switch>
    
  
</Router>



  
  );
}

export default App;
