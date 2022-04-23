import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core'
import Add from "@material-ui/icons/Add"
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note,Person,Phone,Star } from '@material-ui/icons';
import SideBarOption from './SideBarOption';

const sidebarOption_DATA = [
  {
    Icon: Inbox,
    title: "Inbox",
    number: 54,
    isSelected: true
  },
  {
    Icon: Star,
    title: "Starred",
    number: 54,
    isSelected: false
  },
  {
    Icon: AccessTime,
    title: "Snoozed",
    number: 54,
    isSelected: false
  },
  {
    Icon: LabelImportant,
    title: 'Important',
    number: 12,
    isSelected: false
  },
  {
    Icon: NearMe,
    title: "Sent",
    number: 54,
    isSelected: false
  },
  {
    Icon: Note,
    title: "Drafts",
    number: 54,
    isSelected: false
  },
  {
    Icon: ExpandMore,
    title: "More",
    number: 54,
    isSelected: false
  }
]


function Sidebar() {
  return (
    <div className='sidebar'>
        <Button className='sidebar_compose' startIcon={<Add fontSize="large" />}>Compose</Button>
        {sidebarOption_DATA.map((option, index) => (
          <SideBarOption Icon={option.Icon} title={option.title} number={option.number} isSelected={option.isSelected} />
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