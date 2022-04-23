import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import "./SendMail.css";
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';

function SendMail() {
    const dispatch = useDispatch()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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