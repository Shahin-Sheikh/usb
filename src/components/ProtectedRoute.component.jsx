import React from 'react';
import { Login } from '../pages';
import { Layout } from '.';

const ProtectedRoute = ({ children }) => {
  // :TODO: Will Change Logic Later
  const isLogin = true;

  return isLogin ? <Layout>{children}</Layout> : <Login />;
};

export default ProtectedRoute;
