import React from 'react'
import './SideBarOption.css';

function SideBarOption({ Icon, title, number, isSelected }) {
  return (
    <div className={`sidebarOption ${isSelected && "sidebarOption--active"}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SideBarOption