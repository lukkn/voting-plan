import './App.css';
import { Outlet, Route, Routes } from "react-router-dom";
import { Login, Signup, Home, Badges, Character, Friends } from './pages';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from './components/Navbar';


function App() {  
  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Layout />}>
            <Route path="/"  element={<Home />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/character" element={<Character />} />
            <Route path="/friends" element={<Friends />} />
          </Route>
        </Routes>
    </div>
  );
}

function Layout() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? console.log(username)
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie, username]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <main>
      <Navbar logout={Logout}/>
      <Outlet context={[username, setUsername]}/>
    </main>
  )
}

export default App;
