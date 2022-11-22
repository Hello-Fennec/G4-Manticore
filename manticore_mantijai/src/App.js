import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';

function App() {
  return (
    <div className="App">      
      <div>
          <Nav />
          <Home />
      </div>

    </div>
  );
}

export default App;
