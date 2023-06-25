import './App.css';
import Todo from './components/Todo';

function App() {
  const data="Something From App Parent"
  return (
    <div className="App">
      <Todo data={data}/>
    
    </div>
  );
}

export default App;
