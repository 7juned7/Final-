import React from 'react'
import './Login.css'
import {Link} from "react-router-dom";
function Login() {
  return (
    
    <div className='login' >
       <Link to='/'>
        <img className='login__logo'
         src="https://www.pinclipart.com/picdir/big/358-3584545_rolling-pin-clip-art.png"/>
        </Link>
        <div className="login___container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text"/>
                <h5>Password</h5>
                <input type="password"/>
                <button className='login__signInButton' >Sign In</button>
            </form>
            <button className='login__registerButton' >Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login;