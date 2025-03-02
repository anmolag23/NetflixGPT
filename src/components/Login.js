import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () => {
        const nameValue = isSignInForm? null : name.current.value;
        console.log(nameValue);
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(nameValue,email.current.value , password.current.value)
        console.log(message);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value,   photoURL: "https://th.bing.com/th/id/OIP.PqBYGErQeWQWhbA_VeUBDQHaHa?rs=1&pid=ImgDetMain"
              }).then(() => {
                  const {uid, email, displayName, photoURL} = auth.currentUser;
                              dispatch(
                                addUser({
                                  uid : uid, 
                                  email: email, 
                                  displayName: displayName,
                                  photoURL: photoURL
                                }));
                navigate("/browse");
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            console.log(user);
            navigate("/browse");
          
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
        } else{
        
            signInWithEmailAndPassword(auth,email.current.value , password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
        })
         .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-"+ errorMessage);
    });
 }}
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
        <form onSubmit={(e) => e.preventDefault()}
            className='form_one'>
            <h1 className='text'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input
                ref={name}
                type='text'
                placeholder='Full Name'
                className='box_three'
                />
            )}
            <input 
            ref= {email}
            type='text'
            placeholder='Email Address' 
            className='box_one'/>

            <input 
            ref = {password}
            type='password'
            placeholder='Password' 
            className='box_two'/>

            <p className='message'>{errorMessage}</p>

            <button 
            className='button' 
            onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p 
            className='text_p' 
            onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered. Sign In."} 
            </p>

        </form>
    </div>
  )
}
export default Login;
