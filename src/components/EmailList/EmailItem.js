import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import "./EmailItem.css"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function EmailItem({ to, subject, message, time, id }) {
    const history = useHistory()
    const dispatch = useDispatch()

    

    const openMail = () => {
        dispatch(selectMail({
           to, subject, message, time, id
        }))
        history.push('/mail')
    }
  return (
    <div  onClick={openMail}  className='emailItem'>
        <div className='emailItem_options'>
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>
        <h3 className='emailItem_title'>{to}</h3>
        <div className='emailItem_message'>
            <h4>{subject}{" "}  <span className='emailItem_description'>-{" "}{message}</span> </h4>
        </div>
        <div className='emailItem_time'>
            {time}
        </div>
    </div>
  )
}

export default EmailItem