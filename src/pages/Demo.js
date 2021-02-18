import './css/Demo.css';
import Links from '../components/Links.js';

function Demo() {
  return (
    <div>
      <h1 className="demo-h1">ARTHOLE</h1>
      <div className="demo-wrapper">
        <img className="demo-img" src="https://contemporaryartgroup.s3.amazonaws.com/wp-content/uploads/2021/01/xlarge-2cf11786947602d2262b8b490fd14a70-2048x1535.jpg" />
        <button className="demo-form__submit" type="submit">No</button>
        <button className="demo-form__submit" type="submit">Yes</button>
      </div>
      <Links />
    </div>
  )
}

export default Demo;