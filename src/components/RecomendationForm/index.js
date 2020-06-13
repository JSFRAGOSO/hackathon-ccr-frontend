import React, { useState } from 'react';
//import './styles.css'

export default function RecomendationForm ({onSubmit}){
  
  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [keyWords,setKeyWords] = useState('')
  const [link,setLink] = useState('')
  const [observation,setObservation] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    
    await onSubmit(
      {
        name,
        address,  
        keyWords,
        link,
        observation,
      }
    );
    setAddress('')
    setName('')
    setKeyWords('')
  }
  return(<form onSubmit={handleSubmit}>
    <div className="input-block">
      <label htmlFor="name">Nome</label>
      <input
       name="name" 
       id="name" 
       placeholder="Restaurante do Fulano"
       required
       value={name}
       onChange={e => setName(e.target.value)}
       />
    </div>
    <div className="input-block">
      <label htmlFor="address">Endereço</label>
      <input 
        name="address" 
        id="address"
        placeholder="Rua João da Silva, Nº 24 Vila Nova, Porto Alegre - RS " 
        required
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
    </div>
    <div className="input-block">
      <label htmlFor="keyWords">Palavas-Chave (separadas por vírgula)</label>
      <input 
        type="text"
        name="keyWords" 
        id="keyWords" 
        placeholder="Comida, Comer, Boa, Barata Saudável" 
        required 
        value = {keyWords}
        onChange={ e => setKeyWords(e.target.value)}
      />
    </div>
    <div className="input-block">
      <label htmlFor="link">Link</label>
      <input 
        type="text"
        name="link" 
        id="link"
        placeholder="https://goo.gl/maps/LxXHLigJgSAuvXZVA"  
        required 
        value = {link}
        onChange={ e => setLink(e.target.value)}
      />
    </div>
    <div className="input-block">
      <label htmlFor="observation">Observações</label>
      <input 
        type="text"
        name="observation" 
        id="observation" 
        placeholder="Local serve almoço por 15 R$"  
        required 
        value = {observation}
        onChange={ e => setObservation(e.target.value)}
      />
    </div>
    <button type="submit">Cadastrar</button>
  </form>) 
}
