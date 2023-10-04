import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { loggedUser, loading } = useContext(AuthContext);
    let location = useLocation();

    return (
        loading ? (
            <div className='flex justify-center h-[70vh] items-center'>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        ) : loggedUser ? (
            children
        ) : (
            <Navigate state={location.pathname} to="/login"></Navigate>
        )
    );
};

export default PrivateRoute;