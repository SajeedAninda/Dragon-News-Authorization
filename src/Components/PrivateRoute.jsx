import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { loggedUser, loading } = useContext(AuthContext);
    let location = useLocation();
    console.log(location);

    if (loading) {
        <div className='flex justify-center items-center'>
            return <span span className="loading loading-infinity loading-lg" ></span>
        </div>
    }
    if (loggedUser) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;