import React from 'react'
import './styles.css'

export default function RecomendationItem({recomendation}){
  return (
    <li className="rec-item">
      <header>
        <div className="rec-info">
          <strong>{recomendation.name}</strong>
          <span>{recomendation.address}</span>
        </div>
      <p>{recomendation.observation}</p>
      </header>
      <strong>{recomendation.key_words}</strong>
      <a href={recomendation.link}>Link para {recomendation.name}</a>
    </li>
  )
}