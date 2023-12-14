import React from 'react';
import '../assets/css/LoginSignup.css';

import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Forget Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit gray">Sign Up</div>
        <div className="submit" onClick={() => {}}>Login</div>
      </div>
    </div>
  );
}

export default Login;
