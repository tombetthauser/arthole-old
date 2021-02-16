import './App.css';
import Home from "./components/Home.js"
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter basename="/arthole">
        <div className="wrapper-div">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact>Login Page</Route>
            <Route path="/signup" exact>Sign Up Page</Route>
            <Route path="/trydemo" exact>Demo Page</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
