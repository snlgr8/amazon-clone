import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import Login from './Login';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((data) => ({
        id: data.id,
        items: data.data(),
      }));

      setCartItems(tempItems);
    });
  };

  return (
    <Router>
      <div className='App'>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/cart'>
            <Cart cartItems={cartItems} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
