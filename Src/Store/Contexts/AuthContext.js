import React, {useState, useEffect, useContext} from 'react';

export const AuthContext = React.createContext();
const Provider = AuthContext.Provider;
const AuthProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState();

  const data = {
    userDetails,
    setUserDetails,
  };
  return <Provider value={data}>{children}</Provider>;
};

export default AuthProvider;
