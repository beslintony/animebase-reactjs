import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Anime } from './containers/Anime';
import { Home } from './containers/Home/Home';
import { Manga } from './containers/Manga';
import { NavBar } from './components';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
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
    </div>
  );
};

export default App;
