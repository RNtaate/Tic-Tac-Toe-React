import React, { useState, createContext } from 'react';

export const TicContext = createContext();

const TicContextProvider = ({ children }) => {
  const [original, setOriginal] = useState('Roy');

  const contextValue = {
    original,
  };

  return (
    <TicContext.Provider value={contextValue}>{children}</TicContext.Provider>
  );
};

export default TicContextProvider;
