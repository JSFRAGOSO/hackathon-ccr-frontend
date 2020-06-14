import React from 'react'
import './styles.css'

const Tags = ({ list }) => {
  console.log(list)
  return (
    <div className="tag-list">
      {list.map(item => (<strong key={item}>{item}</strong>))}
    </div>
  )
}

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
      <Tags list={recomendation.key_words} />
      <a href={recomendation.link}>Link para {recomendation.name}</a>
    </li>
  )
}