import React, { useEffect, useState } from "react";
import {  Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    NavLink,} from 'react-router-dom';
import UsingHooks from './usd';    



function Dashboard() {
    
    
    return (
        <div>
            <p>Accounts</p>
              
            <Link to="/usd">USD ACCOUNT</Link> <br/>
            <Link to="/ngn">NGN ACCOUNT</Link>
            
            
        </div>
    );
}

export default Dashboard;

