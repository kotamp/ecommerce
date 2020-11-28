import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TopHeader from './components/common/TopHeader'
import CategoryHeader from './components/common/CategoryHeader'
import SearchBar from './components/common/SearchBar'

const App = () => {
  return (
    <div>
      <Router>
        <TopHeader />
        <CategoryHeader />
        <SearchBar />
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
