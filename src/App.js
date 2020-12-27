import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


// key from Stripe.com (no need to hide as it's public)
const promise = loadStripe('pk_test_51I2jT8JygNo8IEPtavAm7ikMzlvXd5k7ZsfOJ44aWFhST7V8tQadHRiGCgTa3PwxYveDgBYj9qOoSm8d86MHWvqr00QcY5TMG2');

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

      <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

        <Route path='/payment'>
            <Header />
            <Elements stripe={ promise }>
              <Payment />
            </Elements>
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
