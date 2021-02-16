import './App.css';
import Landing from "./components/Landing.js"
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="/arthole">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact>Login Page</Route>
            <Route path="/signup" exact>Sign Up Page</Route>
            <Route path="/trydemo" exact>Demo Page</Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
