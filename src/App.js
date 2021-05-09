import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GetMatches from './component/GetMatches';
import PlayerSearch from './component/PlayerSearch';
import News from './component/News';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetMatches} />
          <Route exact path="/playersearch" component={PlayerSearch} />
          <Route exact path="/sportsnews" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
