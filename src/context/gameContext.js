import { createContext, useState, useContext } from 'react';

const GameContext = createContext({});

const GameContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const value = {
    users,
    setUsers,
    user,
    setUser,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContextProvider };

// hook to get game context data
export const useGame = () => {
  const context = useContext(GameContext);
  return context;
};
