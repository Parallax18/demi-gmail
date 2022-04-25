import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, googleProvider } from '../../firebase/firebase';
import "./Login.css";
import { signInWithPopup } from "firebase/auth"


function Login() {
    const dispatch = useDispatch()
    const signIn = async () => {
        try{
            const res = await signInWithPopup(auth, googleProvider)
            const user = res.user

            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }catch (err){
            console.log("err", err.code)
        }
    }
  return (
    <div className='login'>
         <div className='login_container'>
            <img src="https://imgs.search.brave.com/3SIAxowoa412T0FnK6Zx3c94a1mdsTjlRFj8Y9mmmzk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VzIxYi1DRkd1ZGpX/dzM5SE5ocWNnSGFF/SyZwaWQ9QXBp" alt="gmail logo" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
         </div>
    </div>
  )
}

export default Login