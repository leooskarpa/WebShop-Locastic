import './App.css';
import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import Home from './Components/Home/Home.component';
import WorkshopDetailPage from './Components/WorkshopDetailPage/WorkshopDetailPage.component';

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadWorkshops } from './app/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3000/workshops')
      .then(res => dispatch(loadWorkshops(res.data)))
      .catch(err => console.log(err))
  }, [dispatch])



  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/workshop/:id'>
            <WorkshopDetailPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
