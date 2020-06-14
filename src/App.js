import React, {useState,useEffect} from 'react';
import api from './services/api';
import ReminderItem from './components/ReminderItem'
import ReminderForm from './components/ReminderForm'
import chapa from './assets/chapa.png'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App({history}) {
  const [reminders,setReminder] = useState([])

  useEffect(() =>{
    async function loadReminder(){
      const response = await api.get('/reminders');
      setReminder(response.data)
    }  
    loadReminder()
  }, []);

  async function handleAddDev(data){

    const {thumbnail, title, description, hours} = data;
    
    const formData = new FormData();

    formData.append('thumbnail',thumbnail);
    formData.append('title',title);
    formData.append('description',description);
    formData.append('hours',hours);

    const response = await api.post('/reminders',formData);
    setReminder([...reminders,response.data] );
  }
  
  return (
    <div id="app">
      <aside>
        <div className="logo-header">
          <img src={chapa} />
          <strong>Adicione um novo lembrete</strong>
        </div>
        <ReminderForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <div className="main-header">
          <h1>Seus Lembretes</h1>
          <button onClick={() => history.push('/recomendations')}>Ver recomendações</button>
        </div>
        <ul>
          {reminders.map(reminder => (
            <ReminderItem key={reminder._id} reminder={reminder}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
