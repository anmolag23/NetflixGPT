import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='backgrd_img'>
            <img
               src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
               alt="img"/>
        </div>
        <form className='form_one'>
            <h1 className='text'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input
                type='text'
                placeholder='Full Name'
                className='box_three'
                />
            
            )}
            <input type='text' placeholder='Email Address' className='box_one'/>
            <input type='password' placeholder='Password' className='box_two'/>
            <button className='button'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text_p' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered. Sign In."} </p>

        </form>
    </div>
  )
}
export default Login;
