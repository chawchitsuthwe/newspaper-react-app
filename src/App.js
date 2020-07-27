import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import BusinessPage from './components/BusinessPage';
import EntertainmentPage from './components/EntertainmentPage';
import HealthPage from './components/HealthPage';
import SportsPage from './components/SportsPage';
import SciencePage from './components/SciencePage';
import TechPage from './components/TechPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/news" component={NewsPage}/>
          <Route exact path="/business" component={BusinessPage}/>
          <Route exact path="/entertainment" component={EntertainmentPage}/>
          <Route exact path="/health" component={HealthPage}/>
          <Route exact path="/sports" component={SportsPage}/>
          <Route exact path="/science" component={SciencePage}/>
          <Route exact path="/tech" component={TechPage}/>
          {/*<Route exact path="/articles/:title" component={ArticleDetails}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
