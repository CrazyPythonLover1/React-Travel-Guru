import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import tripData from './fakeData/trips.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { WrappedMap } from './components/MapContainer/MapContainer';


export const UserContext = createContext();

function App() {

  const [trips, setTrips] = useState(tripData);
  const [id, setId] = useState(1)
  const trip = trips.find(tp => tp.id === id)
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser,trip, id, setId]}> 
      <Router>
        <Switch>
          <Route path="/home">
            <Home trip={trip} id={id} setId={setId}/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
            </Route>
          <PrivateRoute path="/booking">
            <Book/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
