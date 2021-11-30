import logo from './logo.svg';
import './App.css';
import GrandFather from './components/Grandfather/GrandFather';
import Father from './components/Father/Father';

function App() {
  return (
    <div className="App">
      <GrandFather house={5}></GrandFather>
    </div>
  );
}

export default App;
