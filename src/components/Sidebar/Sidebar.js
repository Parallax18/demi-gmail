import React, { useState } from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core'
import Add from "@material-ui/icons/Add"
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note,Person,Phone,Star } from '@material-ui/icons';
import SideBarOption from './SideBarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';


const sidebarOption_DATA = [
  {
    Icon: Inbox,
    title: "Inbox",
    number: 54,
    id: 1,
    path: ''
  },
  {
    Icon: Star,
    title: "Starred",
    number: 54,
    id: 2,
    path: 'starred'
  },
  {
    Icon: AccessTime,
    title: "Snoozed",
    number: 54,
    id: 3,
    path: 'snoozed'
  },
  {
    Icon: LabelImportant,
    title: 'Important',
    number: 12,
    id: 4,
    path: 'important'
  },
  {
    Icon: NearMe,
    title: "Sent",
    number: 54,
    path: 'sent'
  },
  {
    Icon: Note,
    title: "Drafts",
    number: 54,
    id: 5,
    path: 'drafts'
  },
  {
    Icon: ExpandMore,
    title: "More",
    number: 54,
    id: 6,
    path: 'more'
  }
]


function Sidebar() {
  const dispatch = useDispatch(); 
  const [data] = useState(sidebarOption_DATA)
  const [selected, setSelected] = useState(1)

  console.log({selected})
  const handleRoute = (item) => {
    setSelected(item.id)
  }

  return (
    <div className='sidebar'>
        <Button 
          className='sidebar_compose'
          onClick={() => dispatch(openSendMessage())}
          startIcon={<Add fontSize="large" />}>Compose</Button>
        {data.map((option, index) => (
          <SideBarOption data={option}  handleClick={() => handleRoute(option)} Icon={option.Icon} key={index}  isSelected={option.id == selected} setSelected={setSelected} option={option} />
        ))}
        <div className='sidebar_footer'>
          <div className='sidebar_footerIcons'>
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Duo />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar