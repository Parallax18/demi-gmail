import { Icon, IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import "./Mail.css";
import { useHistory} from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectMailState } from '../../features/mailSlice';

function Mail() {
  const history = useHistory()
  const { selectedMail } = useSelector(selectMailState)
  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>


        </div>
        <div className='mail_toolsRight'>
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <h2>{selectedMail.subject}</h2>
          <LabelImportant className='mail_important'/>
          <p>{selectedMail.to}</p>
          <p className='mail_time'>10pm</p>
        </div>
        
        <div className='mail_message'>
           <p>{selectedMail.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail