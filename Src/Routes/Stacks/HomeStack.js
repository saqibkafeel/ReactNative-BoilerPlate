import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BPHomeScreen from '../../Components/HomeScreen/Screen/BPHomeScreen';
import BPFirstScreen from '../../Components/FirstScreen/Screen/BPFirstScreen';
import BPSecondScreen from '../../Components/SecondScreen/Screen/BPSecondScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode={'screen'}
      screenOptions={{
        headerLeftContainerStyle:
          Platform.OS === 'ios' ? {marginLeft: 20} : null,
      }}>
      <Stack.Screen
        name="Home"
        component={BPHomeScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="FirstScreen"
        component={BPFirstScreen}
        options={{headerShown: true}}></Stack.Screen>
      <Stack.Screen
        name="SecondScreen"
        component={BPSecondScreen}
        options={{headerShown: true}}></Stack.Screen>
    </Stack.Navigator>
  );
};
