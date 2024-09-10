import React from 'react';
import './Login.css'




const Login = () => {
  return (
    <section className="page login-1">
      <div className="login-1-background"></div>
      <div className="login-1-card">
        
        <h2>Welcome back</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/Dashboard.jsx">
          <button>Sign In</button></Link>
        </form>
        <footer>
          Need an account? Sign up <a href="#">here</a>
        </footer>
      </div>
    </section>
  );
}

export default Login