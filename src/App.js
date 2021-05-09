import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GetMatches from './component/GetMatches';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetMatches} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
