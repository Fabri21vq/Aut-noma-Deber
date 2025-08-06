import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';





export type RootStackParamList = {
  Bienvenido: undefined;
  División: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenido">
        <Stack.Screen name="Bienvenido" component={Screen1} />
        <Stack.Screen name="División" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}