import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Screen1 from './screen/screen1';
import Screen2 from './screen/screen2';

const Stack = createStackNavigator();
export default function App() {
  return (
    < NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Option" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

;
