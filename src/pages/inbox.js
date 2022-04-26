import React from 'react'
import EmailList from '../components/EmailList/EmailList'
import { selectMailState } from '../features/mailSlice'
import { useSelector } from 'react-redux'
const Inbox = () => {
    const { emails } = useSelector(selectMailState)

  return (


    <EmailList emails={emails} />
  )
}

export  default Inbox