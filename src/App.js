import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Cricbuzz from './component/Cricbuzz';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Cricbuzz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
