import './App.css';
import './Calendar.css'
import EventsList from './components/eventlist';
import Calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
      </header>
    <body>
      <p>Are you there? It is me, Jake!</p>
      <EventsList />
      <Calendar />   
    </body> 
    </div>
  );
}

export default App;
