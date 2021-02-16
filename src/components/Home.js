import './Home.css';
import { Link } from "react-router-dom";

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
          <li>funded by poor people</li>
          <li>no ads / no bots / no narcs</li>
          <li>built for nobody by idiots</li>
        </ul>
        <ul className="intro-text__links">
          <li><Link className="intro-text__link" to={`/login`}>login</Link></li>
          <li><Link className="intro-text__link" to={`/signup`}>signup</Link></li>
          <li><Link className="intro-text__link" to={`/trydemo`}>trydemo</Link></li>
          {/* <li>moreinfo</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Home;