import React, {useState,useEffect} from 'react';
import api from './services/api';
import ReminderItem from './components/ReminderItem'
import ReminderForm from './components/ReminderForm'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
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
    //const response = await api.post('/reminders', data)
    setReminder([...reminders,response.data] );
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar novo lembrete</strong>
        <ReminderForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <h1>Lembretes cadastrados</h1>
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
