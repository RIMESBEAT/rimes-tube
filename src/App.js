import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
