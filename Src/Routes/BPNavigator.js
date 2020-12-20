import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './Stacks/AuthStack';
import {HomeStack} from './Stacks/HomeStack';

const Stack = createStackNavigator();
const BPNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={HomeStack}
      options={{headerShown: false}}
    />
    {/* <Stack.Screen
      name="AuthStack"
      component={AuthStack}
      options={{headerShown: false}}
    /> */}
  </Stack.Navigator>
);
export default BPNavigator;
