import { Button } from '@material-ui/core';
import { Close, DockRounded } from '@material-ui/icons';
import React from 'react';
import "./SendMail.css";
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db, sendMail } from '../../firebase/firebase';
import { collection, doc } from 'firebase/firestore';


function SendMail() {
    const dispatch = useDispatch()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        try{
            console.log({data})
            const emailRef = await doc(collection(db, "emails"))
            const uid = emailRef.id
            await sendMail({to:data.to, subject:data.subject, message:data.message, timeStamp:"10", isStarred:false, isImportant:false, uid: uid})
        }catch (err){
            console.log(err)
        }

        dispatch(closeSendMessage())
    }

  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
            <h3>New message</h3>
            <Close className='sendMail_close' onClick={() => dispatch(closeSendMessage())} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name='to'  
                placeholder='To:' 
                type="email" 
                {...register('to',{ required: true })} />
            {errors.to && <p className='sendMail_error'>This field is required</p>}
            <input 
                name='subject' 
                placeholder='Subject:' 
                type="text"
                {...register('subject',{ required: true })} />
            {errors.subject && <p className='sendMail_error'>This field is required</p>}
            <input 
                name='message' 
                type="text" 
                className='sendMail_message'
                {...register('message',{ required: true })} />
            {errors.message && <p className='sendMail_error'>This field is required</p>}
            <div className='sendMail_options'>
                <Button 
                variant='contained'
                color='primary'
                type='submit'
                className='sendMail_send'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail