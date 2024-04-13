import React from 'react';
// import EventCard from './components/EventCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from "./components/Tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
}
