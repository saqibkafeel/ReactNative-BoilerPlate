import React, {useState, useEffect, useContext} from 'react';

export const AppContext = React.createContext();
const Provider = AppContext.Provider;
const AppProvider = ({children}) => {
  const [myValue, setMyValue] = useState();
  const data = {
    myValue,
    setMyValue,
  };
  return <Provider value={data}>{children}</Provider>;
};

export default AppProvider;
