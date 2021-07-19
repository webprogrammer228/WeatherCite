import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from './Today/Home'
import Now from './Today/Now';
import Week from "./Week/Week";

function App() {
  const preview = {
    title: 'Добро пожаловать на сайт погоды в Омске',
    description: 'Мы покажем вам погоду в городе Омск'
  }
  return (
    <div>
      <Router>
        <Header />
        <main>
        <Switch>
          <Route path="/" exact component={Home}>
            <Home preview={preview} />
            </Route>
            <Route path="/now" component={Now} />
            <Route path="/week" component={Week} />
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
