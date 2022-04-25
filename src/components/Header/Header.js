import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import { Apps, ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUserState } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';


 
function Header() {

  const { user }  = useSelector(selectUserState)
  const dispatch = useDispatch()

  const signOut = async() => {
    try{
      await auth.signOut()
      dispatch(logout())
    }
    catch(err){
      console.log('unable to logout', err)
    }
  }

  return (
    <div className='header'>
      <div className='header_left'>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src="https://imgs.search.brave.com/3SIAxowoa412T0FnK6Zx3c94a1mdsTjlRFj8Y9mmmzk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VzIxYi1DRkd1ZGpX/dzM5SE5ocWNnSGFF/SyZwaWQ9QXBp" alt="gmail logo" />
      </div>
      <div className='header_middle'>
          <Search />
          <input placeholder='Search mail' type={"text"} />
          <ArrowDropDown className='header_inputCaret' />
      </div>
      <div className='header_right'>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={signOut}>
          <Avatar src={user?.photoUrl}/>
        </IconButton>
      </div> 
    </div>
  )
}

export default Header