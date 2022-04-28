import React from 'react'
import EmailList from '../components/EmailList/EmailList'
import { selectMailState } from '../features/mailSlice'
import { useSelector } from 'react-redux'


export const Important = () => {
    const { importantEmails } = useSelector(selectMailState)
    console.log("important ", importantEmails)

  return (
    <EmailList emails={importantEmails}  />
  )
}
