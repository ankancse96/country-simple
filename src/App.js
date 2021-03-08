
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/name/:countryName">
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="*">
           \
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
