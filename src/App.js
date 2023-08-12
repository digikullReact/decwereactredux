import './App.css';
import Socket from './components/Socket';
import Todo from './components/Todo';

function App() {
  const data="Something From App Parent"
  return (
    <div className="App">
      <Socket/>
    
    </div>
  );
}

export default App;
