import React from 'react';
import { StyleSheet } from 'react-native';
// import EventCard from './components/EventCard';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./components/tabs";

const dummy_event = {
  "id": "65cfe6e096a2d6a316f46e70",
  "title": "Spring Walk",
  "description": "Join us for a walking event in the Spring! We will be walking around 5 miles in total.",
  "featureImage": "https://studio5.ksl.com/wp-content/uploads/2020/05/walkfeet520-740x493.jpg",
  "startTime": "2024-10-17T12:34:03.874Z",
  "endTime": "2024-10-17T21:34:03.874Z",
  "link": "https://example.com",
  "date": "2024-03-15T18:00:00.000Z",
  "duration": 180,
  "location": {
      "latitude": 0,
      "longitude": 0,
      "address": "6100 Main St, Houston, TX 77005",
      "_id": "65cfe6e001bce9780f9897df"
  },
  "organization": "65cfda3383058492e13dba01",
  "__v": 0
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5F7FE",
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarContainer: {
    width: '100%',
    height: "19%",
    flexDirection: "column",
    backgroundColor: "#00426E",
    alignItems: "center"
  },
  PartialEventContainer: {
    width: '100%',
    height: "35%",
  }
});
