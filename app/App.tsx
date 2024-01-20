import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EventList from "./components/event/EventList";
import React = require("react");
import { EventData } from "./types/EventData";

export default function App() {
    // event1 and event2 for testing purposes
    let event1: EventData = {
        id: "1",
        title: "Pumpkin picking",
        description: "Come pick pumpkins!",
        featureImage: 'https://picsum.photos/id/80/3888/2592',
        link: 'https://bozourl.com',
        date: new Date(2023, 11, 28), // December 28, 2023
        startTime: "9:00AM",
        endTime: "8:00PM",
        location: {
          latitude: 1,
          longitude: 1,
          address: "123 Pumpkin Patch Farm Houston TX 77005"
        }
    }
      
    let event2: EventData = {
      id: "2",
      title: "Free photoshoot at Hermann Park",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      featureImage: 'https://picsum.photos/id/237/200/300',
      link: 'https://morebozourl.com',
      date: new Date(),
      startTime: "12:00AM",
      endTime: "12:00PM",
      location: {
        latitude: 2,
        longitude: 2,
        address: "6310 Main Street"
      }
  }

  return (
    <View style={styles.container}>
      <EventList eventList={[event1, event2]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
