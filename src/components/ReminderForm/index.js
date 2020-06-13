import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import './styles.css'

export default function DevForm ({onSubmit}){
  
  const [thumbnail,setThumbnail] = useState(null);
  const [hours,setHours] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail):null;
},
    [thumbnail]

);

  async function handleSubmit(e){
    e.preventDefault();
    await onSubmit(
      {
        title,
        description,  
        hours,
        thumbnail
      }
    );
    setDescription('')
    setTitle('')
    setHours('')
    setThumbnail(null)
  }
  return(<form onSubmit={handleSubmit}>
    <div className="input-block">
      <label htmlFor="title">Título</label>
      <input
       name="title" 
       id="title" 
       required
       value={title}
       onChange={e => setTitle(e.target.value)}
       />
    </div>
    <div className="input-block">
      <label htmlFor="description">Descrição</label>
      <input 
        name="description" 
        id="description" 
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>
    <div className="input-group">
      <div className="input-block">
        <label htmlFor="hours">Horário</label>
        <input 
          type="text"
          name="hours" 
          id="hours" 
          required 
          value = {hours}
          onChange={ e => setHours(e.target.value)}
        />
      </div>
    </div>
    <label
             id="thumbnail"
             style = {{backgroundImage: `url(${preview})`}}
             className = { thumbnail? 'has-thumbnail': ''} 
            >
                <input type="file" onChange = { event => setThumbnail(event.target.files[0])}/>
                <img src = {camera} alt = "Select img"/>
            </label>
    <button type="submit">Cadastrar</button>
  </form>) 
}
