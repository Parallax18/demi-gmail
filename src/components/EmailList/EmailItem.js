import React, { useState } from 'react';
import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, Star, StarBorderOutlined } from '@material-ui/icons';
import "./EmailItem.css"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function EmailItem({ to, subject, message, time, isStarred, isImportant, id }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleStar = async () => {
        try{
            console.log("logged", isStarred)
            const mailRef = doc(db, "emails", id)
            await updateDoc(mailRef, {
                isStarred: !isStarred
            })
            console.log("finished")
        }catch (err){
            console.log("Can not star", err)
        }
    }

    const handleImportance = async () => {
        try{
            console.log("logged", isImportant)
            const mailRef = doc(db, "emails", id)
            await updateDoc(mailRef, {
                isImportant: !isImportant
            })
            console.log("finished")
        }catch(err){
            console.log('can not make important', err)
        }
    }

    

    const openMail = () => {
        dispatch(selectMail({
           to, subject, message, time, isStarred, isImportant, id
        }))
        history.push('/mail')
    }
  return (
    <div className='emailItem'>
        <div className='emailItem_options'>
            <Checkbox />
            <IconButton onClick={handleStar}>
                {isStarred ? <Star className='emailItem--starred'/> : <StarBorderOutlined />}  
            </IconButton>
            <IconButton onClick={handleImportance}>
                <LabelImportantOutlined className={isImportant ? "emailItem--important" : ""}/>
            </IconButton>
        </div>
        <div onClick={openMail} className='emailItem_content'>
            <h3 className='emailItem_title'>{to}</h3>
            <div className='emailItem_message'>
                <h4>{subject}{" "}  <span className='emailItem_description'>-{" "}{message}</span> </h4>
            </div>
            <div className='emailItem_time'>
                {time}
            </div>
        </div>
    </div>
  )
}

export default EmailItem