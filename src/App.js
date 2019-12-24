import React, { useEffect } from 'react';

import Nav from './components/Nav/Nav';
import { useDispatch } from 'react-redux';
import Home from './containers/Home/Home';
import Location from './containers/Loc/Loc';
import Cake from './containers/Cake/Cake';
import Signin from './containers/Signin/Signin';
import { getCategory, getSignIn } from './store/action';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory())
    if(localStorage.getItem('token')){
      dispatch(getSignIn());
    }
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <Nav />
            <div style={{ height: '100vh', overflow: 'auto' }}>
                <Route path='/' exact component={Home} />
                <Route path='/loc' component={Location} />
                <Route path='/cake/:category' component={Cake} />
                <Route path='/signin' component={Signin} /> 
            </div>
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
}