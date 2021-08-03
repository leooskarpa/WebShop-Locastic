import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import Home from './Components/Home/Home.component';
import WorkshopDetailPage from './Components/WorkshopDetailPage/WorkshopDetailPage.component';
import MySidebar from './Components/MySidebar/MySidebar.component';
import Checkout from './Components/Checkout/Checkout.component'

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadWorkshops, loadUsers } from './app/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const dispatch = useDispatch()
  const checkoutOpen = useSelector(state => state.checkout)

  useEffect(() => {
    axios.get('http://localhost:3000/workshops')
      .then(res => dispatch(loadWorkshops(res.data)))
      .catch(err => console.log(err))

    axios.get('http://localhost:3000/users')
      .then(res => dispatch(loadUsers(res.data)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <div className="main-container">
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='/workshop/:id'>
              <WorkshopDetailPage />
            </Route>
          </Switch>
        </div>

        <MySidebar />
        <Checkout />
        <Footer />
      </Router>
    </div>
  );

}

export default App;
