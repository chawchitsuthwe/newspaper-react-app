import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './components/HomePage';
import ArticlesDisplayByCategory from './components/ArticlesDisplayByCategory';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/news" render={(props) => <ArticlesDisplayByCategory {...props} category="general" title="NEWS" />} />
          <Route exact path="/business" render={(props) => <ArticlesDisplayByCategory {...props} category="business" title="BUSINESS" />}/>
          <Route exact path="/entertainment" render={(props) => <ArticlesDisplayByCategory {...props} category="entertainment" title="ENTERTAINMENT" />}/>
          <Route exact path="/health" render={(props) => <ArticlesDisplayByCategory {...props} category="health" title="HEALTH" />}/>
          <Route exact path="/sports" render={(props) => <ArticlesDisplayByCategory {...props} category="sports" title="SPORTS" />}/>
          <Route exact path="/science" render={(props) => <ArticlesDisplayByCategory {...props} category="science" title="SCIENCE" />}/>
          <Route exact path="/tech" render={(props) => <ArticlesDisplayByCategory {...props} category="technology" title="TECHNOLOGY" />}/>
          {/*<Route exact path="/articles/:title" component={ArticleDetails}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
