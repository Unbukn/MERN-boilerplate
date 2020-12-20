import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SomePage from './pages/SomePage'
import Detail from './pages/SomeDataDetail'
import PageNotFound from './pages/PageNotFound'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={['/', '/somedata']}>
            <SomePage />
          </Route>
          <Route exact path="/somedata/:id">
            <Detail />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
