import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './pages/ArtistDashBoard';

class App extends React.Component {
  render(){


    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/artist/id'component={Dashboard}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
