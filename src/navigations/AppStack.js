import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Hotels from '../views/hotels';

const Stack = createStackNavigator();

const AppStack: () => React = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hotels" component={Hotels} />
    </Stack.Navigator>
  );
};

export default AppStack;
