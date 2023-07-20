import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { TicContext } from '../context/TicContextProvider';

const PrivateRoutes = () => {
  const context = useContext(TicContext);

  const { players } = context;

  return players.player1 && players.player2 ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
