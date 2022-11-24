import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';
import Appear from './component/Appearance';

function App() {
  return (
    <div className="App">      
      <div>
          <Nav />
          <Home />
          <Appear />
      </div>

    </div>
  );
}

export default App;
