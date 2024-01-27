import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./components/basic/Text";
import { EventPage } from "./pages/EventPage";
import { EventData } from "./types/EventData";

export default function App() {
  const eventData: EventData = {
    id: "rj84l",
    host: "Rice University",
    title: "Rice 10 Mile & 5K",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    featureImage: "https://picsum.photos/id/654/3888/2592",
    link: "https://www.rice.edu",
    date: new Date(2023, 9, 23), // October 23, 2023
    startTime: "9:00AM",
    endTime: "12:00PM",
    location: {
      latitude: 5,
      longitude: 5,
      address: "Rice University"
    }
  }

  return (
    <View style={styles.container}>
      <EventPage event={eventData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
