import './css/Links.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Links() {
  const location = useLocation().pathname;
  console.log(location)

  return (
    <div className="intro-text">
      <ul className="intro-text__links">
        <li>
          {
            location === "/login"
              ? <Link to={`/login`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>login</Link>
              : <Link to={`/login`} className="intro-text__link">login</Link>
          }
        </li>
        <li>
          {
            location === "/signup"
              ? <Link to={`/signup`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>signup</Link>
              : <Link to={`/signup`} className="intro-text__link">signup</Link>
          }
        </li>
        {/* {
          location === "/" 
            ? null 
            : <li><Link to={`/`} className="intro-text__link">back</Link></li>
        } */}
        <li>
          {
            location === "/demo"
              ? <Link to={`/demo`} className="intro-text__link disabled-link" onClick={e => e.preventDefault()}>trydemo</Link>
              : <Link to={`/demo`} className="intro-text__link">trydemo</Link>
          }
        </li>
      </ul>
    </div>
  );
}

export default Links;
