import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PlayBox from "./components/PlayBox/PlayBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/playbox/:id" element={<PlayBox />} exact />
        </Routes>
      </main>
    </div>
  );
}

export default App;
