import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import { NavBar } from './components';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Home />
        </Switch>
      </Router>
    </>
  );
};

export default App;
