import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, } from 'bootstrap';
import {  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  NavLink,} from 'react-router-dom';

function Login() {

  return (
    <div className="Body">
      <nav> <NavLink to="/dashboard">My Account</NavLink> </nav>
       <form className="Form">
         <label>Enter Login Details Here</label> <br/>
         <label>Email Address</label> <br/>
         <input type="email" required /> <br/>
         <label>Password</label> <br/>
         <input type="password" required /> <br/>
         
       </form>
       
    </div>
  );
}
export default Login;