import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Hotels from '../screens/hotels/home';
import HotelDetail from '../screens/hotels/detail';

const Stack = createStackNavigator();

const AppStack: () => React = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Hotels}
        options={{title: 'Listado de hoteles'}}
      />
      <Stack.Screen
        name="HotelDetail"
        component={HotelDetail}
        options={({route}) => ({title: route.params.hotel.name})}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
