import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';
import Appear from './component/Appearance';
import History from './component/History';

function App() {
  
  return (
    <div className="App">      
        <Nav />
        <Home />
        <Appear />
        <History />
    </div>
  );
}

export default App;
