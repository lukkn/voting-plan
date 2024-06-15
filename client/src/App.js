import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from './pages';

function App() {
  const [data, setData] = useState({});

  // Fetching message from backend
  async function getProducts() {
    fetch('http://localhost:4000' + "/products", {
    })
    .then((res) => res.json())
    .then((data) => setData(data))
    .then(() => console.log(data));
  }
  
  return (
    <div className="App">
      <button type="button" onClick={getProducts}>Get Products</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
