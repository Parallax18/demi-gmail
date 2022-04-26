import React from 'react'
import EmailList from '../components/EmailList/EmailList'
import { selectMailState } from '../features/mailSlice'
import { useSelector } from 'react-redux'
export const Starred = () => {


    const { starredEmails } = useSelector(selectMailState)
console.log("star routes ", starredEmails)

  return (
    <EmailList emails={starredEmails} />
  )
}
