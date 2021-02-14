import './Home.css';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="navbar">
        <h1 className="navbar__h1">ARTHOLE</h1>
      </div>
      <div className="intro-text">
        <ul className="intro-text__large-list">
          <li>swipe</li>
          <li>connect</li>
          <li>find studio visits</li>
          <li>find peers</li>
          <li>find art</li>
        </ul>
        <ul className="intro-text__medium-list">
          <li>funded by nothing</li>
          <li>no ads / no bots / no narcs</li>
          <li>built for nobody by nobody</li>
        </ul>
        <ul className="intro-text__links">
          <li>login</li>
          <li>signup</li>
          <li>trydemo</li>
          {/* <li>moreinfo</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Home;
