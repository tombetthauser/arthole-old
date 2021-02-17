import './css/Login.css';
import Links from '../components/Links.js';

function Signup() {
  return (
    <div>
      <h1 className="login-h1">Sign Up</h1>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <label className="form_label">username</label>
        <input className="form__input" type="text" name="username" placeholder="username" required />
        <label className="form_label">password</label>
        <input className="form__input" name="password" type="password" placeholder="password" required />
        <button className="form__submit" type="submit">Sign Up</button>
      </form>
      <Links />
    </div>
  )
}

export default Signup;