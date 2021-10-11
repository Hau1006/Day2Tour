
import React, { } from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Birthday from './pages/birthday/Birthday'
import Home from './pages/Home/Home'
import Pagetours from './pages/tours/Pagetours'





function App() {


  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tours" component={Pagetours} />
          <Route exact path="/birthday" component={Birthday} />
        </Switch>
      </>
    </Router>

  )
}
export default App
