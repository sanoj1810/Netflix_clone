import React, { useEffect, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {

  const [SignState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const user_auth = async (event) => {  
    event.preventDefault();
    setLoading(true);
    if (SignState === 'Sign In') {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }
  return (
    loading?<div className="spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="logo is some error" className='login-logo' />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form>
          {SignState === 'Sign Up' ? <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder='Your name'
            className='info' /> : null}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder='Email or mobile number'
            className='info' />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            className='info' />

          <p>Forget password</p>
          <button onClick={user_auth}>{SignState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {SignState === 'Sign In' ?
              <h4>New to Netflix?<span 
              onClick={() => setSignState("Sign Up")}
              >Sign Up Now</span></h4> :
              <h4>Already have an account?<span 
              onClick={() => setSignState("Sign In")}
              >Sign In Now.</span></h4>
            }
          </div>
          <div className="description">
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
