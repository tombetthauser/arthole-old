import './App.css';
import Home from "./components/Home.js"
import { NavBar } from "./components/NavBar.js"
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="wrapper-div">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              {/* <About /> */}
              Login Page
            </Route>
            <Route path="/signup">
              Sign Up Page
            </Route>
            <Route path="/trydemo">
              Demo Page
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
