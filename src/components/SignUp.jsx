import React from 'react';
import '../assets/css/LoginSignup.css';

import user_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const SignUp = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Confirm Password"/>
        </div>
      </div>
      <div></div>
      <div className="submit-container">
        <div className="submit" onClick={() => {}}>Sign Up</div>
        <div className="submit gray" onClick={() => {}}>Login</div>
      </div>
    </div>
  );
}

export default SignUp;
