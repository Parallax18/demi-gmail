import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './SideBarOption.css';

const  SideBarOption = ({ option, setSelected,  Icon,  handleClick, isSelected }) => {
  const history = useHistory()
  const {title, number, path, id} = option

  const click = () => {
    handleClick()

    setSelected(id)

    history.push(`/${path}`)
  }

  return (
    <div className={`sidebarOption ${isSelected && "sidebarOption--active"}`} onClick={click}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SideBarOption