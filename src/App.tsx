import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import { NavBar } from './components';
import { useWindowWidth } from './hooks';

const App: React.FC = () => {
  const currentScreenWidth = useWindowWidth();

  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Home />
        </Switch>
      </Router>
    </>
  );
};

export default App;
