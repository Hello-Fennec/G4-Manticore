import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';
import Appear from './component/Appearance';
import History from './component/History';
import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

{/* Context API (ให้บริการเกี่ยวกับข้อมูลสถานะของตัว Application )*/ }
export const DataContext = createContext()


function App() {
  {/* ส่วนของ State สำหรับจัดเก็บสถานะภายในแอพ */ }
  const [appState, setAppState] = useState("menu");
  {/* ส่วนของ state สำหรับจัดเก็บคะแนน */ }
  const [score, setScore] = useState(0);

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
