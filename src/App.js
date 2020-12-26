import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads because [empty]

    auth.onAuthStateChanged(authUser => {
      console.log("L'utilisateur est: ", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    // BEM
    <Router>
      <div className="App">

      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

        <Route path='/payment'>
            <Payment />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
