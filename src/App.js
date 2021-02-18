import './App.css';
import Landing from "./components/Landing.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import Demo from "./pages/Demo.js"
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="/arthole">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/demo" exact component={Demo} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
