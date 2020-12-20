import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthProvider from '../Store/Contexts/AuthContext';
import NavigationService from './NavigationService';
import AppProvider from '../Store/Contexts/AppContext';
import App from '../App';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E8EBED',
  },
};

export default function Root() {
  return (
    <NavigationContainer
      ref={(navigationRef) => {
        NavigationService.setTopLevelNavigator(navigationRef);
      }}
      theme={MyTheme}>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
