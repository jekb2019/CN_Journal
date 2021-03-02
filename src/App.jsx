import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Login from './components/login/login';
import Home from './components/home/home';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path={['/', '/login']} exact>
            <Login/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
