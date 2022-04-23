import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings, People, LocalOffer } from '@material-ui/icons'
import React from 'react'
import EmailCategory from './EmailCategory'
import EmailItem from './EmailItem'
import "./EmailList.css"

function EmailList() {
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
            <EmailItem
                title={"Twitch"}
                subject={"My fellow streamer!"}
               description = {"This is a test"}
                time={"10pm"}
                />
        </div>
    </div>
  )
}
// 50226577

export default EmailList  