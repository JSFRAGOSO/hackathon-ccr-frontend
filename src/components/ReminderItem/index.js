import React from 'react'
import './styles.css'
export default function DevItem({reminder}){
  return (<li className="dev-item">
  <header>
    <img src={reminder.thumbnail_url} alt={reminder.title}/>
    <div className="user-info">
      <strong>{reminder.title}</strong>
      <span>{reminder.hours}</span>
    </div>
  </header>
  <p>{reminder.description}</p>
</li>
)
}