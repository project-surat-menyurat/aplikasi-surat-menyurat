// import "./styles.css";
import './css/styles.css';
import logo from "./img/PROUDIT.png";

export default function Login1(){
  return(
    <section className="page login-1">
    <div className="login-1-background"></div>
    <div className="login-1-card">
      <img src={logo} />
      <h2>STAFF LOGIN</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  </section>
  )
}