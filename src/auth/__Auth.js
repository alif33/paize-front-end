import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const __Auth = ({ role, children })=> {
    const { users } = useSelector(state=>state);
    const { __u__ } = users;

    if( !__u__ || role !== __u__.role) {
        return <Navigate to="/" replace />;
    }

    return children;
  }

export default __Auth;