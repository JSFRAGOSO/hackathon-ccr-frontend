import React, {useState,useEffect} from 'react';
import api from './services/api';
import RecomendationItem from './components/RecomendationItem'
import RecomendationForm from './components/RecomendationForm'
import chapa from './assets/chapa.png'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function Recomendations({history}) {
  const [recomendations,setRecomendations] = useState([])

  useEffect(() =>{
    async function loadRecomendations(){
      const response = await api.get('/recomendations');
      setRecomendations(response.data)
    }  
    loadRecomendations()
  }, []);

  async function handleAddRecomendation(data){
    const {name, address, keyWords, link, observation} = data;
    console.log(data)
    const response = await api.post('/recomendations',{name, address, key_words:keyWords, link, observation});
    setRecomendations([...recomendations,response.data] );
  }
  
  return (
    <div id="app">
      <aside>
        <div className="logo-header">
          <img src={chapa} />
          <strong>Adicione uma nova Recomendação</strong>
        </div>
        <RecomendationForm onSubmit={handleAddRecomendation}/>
      </aside>

      <main>
        <div className="main-header">
          <h1>Suas Recomendações</h1>
          <button onClick={() => history.push('/')}>Ver lembretes</button>
        </div>
        <ul>
          {recomendations.map(recomendations => (
            <RecomendationItem key={recomendations._id} recomendation={recomendations}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Recomendations;
