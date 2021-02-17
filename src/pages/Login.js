import './css/Login.css';
import Links from '../components/Links.js';

function Login() {
  return (
    <div>
      <h1 className="login-h1">Log In</h1>
      <form className="login-form" onSubmit={e => e.preventDefault()}>
        <label className="login-form_label">username</label>
        <input className="login-form__input" type="text" name="username" placeholder="username" required />
        <label className="login-form_label">password</label>
        <input className="login-form__input" name="password" type="password" placeholder="password" required />
        <button className="login-form__submit" type="submit">Log In</button>
      </form>
      <Links />
    </div>
  )
}

export default Login;