import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { constants } from "./Style";

import { AnnouncementData } from "./types/AnnouncementData";
import AnnouncementList from "./components/announcement/AnnouncementList";
const Tab = createBottomTabNavigator();
const sampleAnnouncementList: AnnouncementData[] = [
  {
    id: "1",
    authorPicture: 'https://1000logos.net/wp-content/uploads/2021/07/Rice-Owls-logo.png',
    type: 'Event',
    organization: 'STarget1',
    description: 'Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!',
    date: new Date('2024-02-03T12:00:00Z'),
  },
  {
    id: "2",
    authorPicture: 'https://1000logos.net/wp-content/uploads/2021/07/Rice-Owls-logo.png',
    type: 'Save the date',
    organization: 'Sample Organization',
    description: 'Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!',
    date: new Date('2024-02-03T12:00:00Z'),
  },
  {
    id: "3",
    authorPicture: 'https://1000logos.net/wp-content/uploads/2021/07/Rice-Owls-logo.png',
    type: 'Early Reservation',
    organization: 'Sample Organization',
    description: 'Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!',
    date: new Date('2024-02-03T12:00:00Z'),
  },
  {
    id: "4",
    authorPicture: 'https://example.com/author-picture.jpg',
    type: 'Event',
    organization: 'Sample Organization',
    description: 'Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!Join us for an exciting event!',
    date: new Date('2024-02-03T15:11:00Z'),
  },

]

function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <AnnouncementList announcementList = {sampleAnnouncementList}/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
        component={Home}
        options={{
          tabBarIcon: ({ color }) => TabIcon("home", color)
        }} />
      <Tab.Screen
        name="Events"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => TabIcon("calendar", color)
        }} />
      <Tab.Screen
        name="Resources"
        component={Home}
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

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
