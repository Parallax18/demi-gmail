import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings, People, LocalOffer } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMailState } from '../../features/mailSlice'
import EmailCategory from './EmailCategory'
import EmailItem from './EmailItem'
import "./EmailList.css"

const EmailList = () => {
   const {emails} = useSelector(selectMailState)
  return (
    <div className="emailList">
        <div className='emailList_settings'>
            <div className="emailList_settingsLeft">
                <Checkbox />
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
            <div className='emailList_settingsRight'>
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>

        <div className='emailList_sections'>
            <EmailCategory Icon={Inbox} title="primary" color="red" isSelected={true}/>
            <EmailCategory Icon={People} title="Social" color="blue" isSelected={false}/>
            <EmailCategory Icon={LocalOffer} title="Promotions" color="green" isSelected={false}/>
        </div>

        <div className='emailList_list'>

        {emails.map((email,index)=> (
            <EmailItem
                title={email.title}
                subject={email.subject}
                description = {email.description}
                time={"10pm"}
            />
        ))}
           
        </div>
    </div>
  )
}
// 50226577

export default EmailList  