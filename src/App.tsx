import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Anime } from './containers/Home/Anime';
import { Home } from './containers/Home/Home';
import { Manga } from './containers/Home/Manga';
import { NavBar } from './components';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Home />
          </Route>
          <Route exact path="/anime">
            <Anime />
          </Route>
          <Route exact path="/manga">
            <Manga />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
