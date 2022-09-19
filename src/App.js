import './index.css';
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  NavLink,} from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import {Button, } from 'bootstrap';
  import usd from './usd';




function App() {
  const [code, setCode] = useState();
  const [mount, setMount] = useState();
  const link = "https://wa.me/";
  const message = link + code + mount;
 return (
  <div>
    
    <form className="Form">
    <input 
       className="Input"
       placeholder='Enter Country Code'
       value={code}
       onChange={(e) => setCode(e.target.value)}
      type="text"/> <br/>
      <input 
       className="Input"
       placeholder='Enter Phone Number'
       value={mount}
       onChange={(e) => setMount(e.target.value)}
      type="text"/> <br/>
    <button 
    className="Button"
    onClick={message}><b><a href={message}>SEND MESSAGE</a></b></button>
    </form> 
    
  </div>    
  );
}

export default App;
