import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut= () =>{
    console.log("Sign-out button clicked");
  
  signOut(auth).then(() => {
  navigate("/");
  }).catch((error) => {
  navigate("/error");
  });

  }

   useEffect(() => {
        
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(
                  addUser({
                    uid : uid, 
                    email: email, 
                    displayName: displayName,
                    photoURL: photoURL
                  }));
                  navigate("/browse");
              } else {
                dispatch(removeUser());
                navigate("/");
           }
            });
            return () => unsubscribe();
      },[]);
  return (
    <div className='logo'>
        <img src={LOGO}
        alt = "logo"/>
      {user && (  
     <div className='user_icon'>
      <img className='user_i' 
      alt="usericon"
      src={user?.photoURL}/>
      <button onClick={()=> {console.log("cliked");
       handleSignOut();
      }}
      className='user_b'>SignOut</button>
      console.log("clicked")
      </div>  
      )} 
    </div>
  
  )
}
export default Header;