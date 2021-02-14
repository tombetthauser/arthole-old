// import './App.css';
import Home from "./components/Home.js"
import { NavBar } from "./components/NavBar.js"
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
