import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>
            <svg class="animate-bounce w-6 h-6 ...">
           <FaBell></FaBell>
        </svg>
        </div>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    }
    
};

export default PrivateRoute;