import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';

function App() {
  return (
    <div className="App">      
      <div className='bg-orange-100 w-full h-screen'>
          <Nav />
          <Home />
      </div>

    </div>
  );
}

export default App;
