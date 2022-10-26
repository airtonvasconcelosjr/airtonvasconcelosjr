import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ChatPage from "./Components/ChatPage";
import Home from "./Components/Home";
import {useState} from 'react';


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/chatpage" element={<ChatPage currentUser={user}/>} />
        <Route path="/" element={<Home currentUser={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
