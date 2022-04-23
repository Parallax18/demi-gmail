import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import "./EmailItem.css"
import { useHistory } from "react-router-dom";

function EmailItem({ title, subject, description, time, id }) {
    const history = useHistory()
  return (
    <div  onClick={() => history.push("/mail")}  className='emailItem'>
        <div className='emailItem_options'>
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>
        <h3 className='emailItem_title'>{title}</h3>
        <div className='emailItem_message'>
            <h4>{subject}{" "}  <span className='emailItem_description'>-{" "}{description}</span> </h4>
        </div>
        <div className='emailItem_time'>
            {time}
        </div>
    </div>
  )
}

export default EmailItem