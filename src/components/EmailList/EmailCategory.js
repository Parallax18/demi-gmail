import React from 'react'
import "./EmailCat.css"

function EmailCategory({ Icon, title, color, isSelected}) {
  return (
    <div className={`category ${isSelected && "category--selected"}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${isSelected && color}`
        }}
    >
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default EmailCategory