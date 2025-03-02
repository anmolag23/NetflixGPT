import React from 'react'
import {useSelector} from "react-redux";
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut= () =>{
  
  signOut(auth).then(() => {
  navigate("/");
  }).catch((error) => {
  navigate("/error");
  });

  }
  return (
    <div className='logo'>
        <img src="https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-300x134.png"
        alt = "logo"/>
    {user && (
     <div className='user_icon'>
      <img 
      alt="usericon"
      src={user.photoURL}/>
      <button 
      onClick={handleSignOut} 
      className='user_b'>
        SignOut
      </button>
      </div> 
      )}  
    </div>
  
  )
}

export default Header;