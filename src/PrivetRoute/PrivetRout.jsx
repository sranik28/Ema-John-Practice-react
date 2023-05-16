import React from 'react';
import { useDataGlobally } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({ children }) => {
    const { user,loading } = useDataGlobally()
    const location = useLocation()
    console.log(location)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
        
};

export default PrivetRout;