import './App.css';
import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import Home from './Components/Home/Home.component';
import WorkshopPage from './Components/WorkShopPage/WorkshopPage.component';

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadWorkshops } from './app/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3000/workshops')
      .then(res => dispatch(loadWorkshops(res)))
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/workshop/:id'>
            <WorkshopPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
