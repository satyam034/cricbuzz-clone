import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GetMatches from './component/GetMatches';
import PlayerSearch from './component/PlayerSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetMatches} />
          <Route exact path="/playersearch" component={PlayerSearch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
