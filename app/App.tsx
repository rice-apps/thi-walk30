import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { constants } from "./Style";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResourcesPage } from "./pages/ResourcesPage";
import EventsPage from "./pages/EventsPage";
import { EventPage } from "./pages/EventPage";
import { Button } from "react-native-paper";
import { EventData } from "./types/EventData";
import ProfilePage from "./pages/ProfilePage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View style={styles.center}>
      <StatusBar style="auto" />
      <Text>Not implemented yet!</Text>
    </View>
  );
}

function Tabs() {
  function TabIcon(name: any, color: string) {
    return (
      <MaterialCommunityIcons name={name} color={color} size={26} />
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: constants.gray,
        tabBarActiveTintColor: constants.darkBlue
      }} >
      <Tab.Screen
        name="Home"
        children={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => TabIcon("home", color)
        }} />
      <Tab.Screen
        name="Events"
        children={(navigator) => <EventsPage navigator={navigator} />}
        options={{
          tabBarIcon: ({ color }) => TabIcon("calendar", color)
        }} />
      <Tab.Screen
        name="Resources"
        component={ResourcesPage}
        options={{
          tabBarIcon: ({ color }) => TabIcon("information", color)
        }} />
      <Tab.Screen
        name="Updates"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => TabIcon("bell", color)
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Tabs />
  );
}

export default function AppStack() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={App} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Event" children={(navigator) => <EventPage navigator={navigator} />} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});