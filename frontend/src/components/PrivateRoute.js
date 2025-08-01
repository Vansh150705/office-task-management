import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component }) {
  const token = localStorage.getItem('token');
  return token ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;
