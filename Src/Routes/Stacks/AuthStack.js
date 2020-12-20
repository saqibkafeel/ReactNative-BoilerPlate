import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return <Stack.Navigator headerMode={'screen'}></Stack.Navigator>;
};
