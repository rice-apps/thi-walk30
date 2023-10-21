import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventList from './components/profile/EventList';
import { EventData } from './types/EventData';

let event1: EventData = {
  id: "1",
  title: "Pumpkin picking",
  description: "Come pick pumpkins!",
  featureImage: 'https://picsum.photos/id/80/3888/2592',
  link: 'https://bozourl.com',
  date: new Date("2023-10-27"),
  location: {
    latitude: 1,
    longitude: 1,
    address: "123 Pumpkin Patch Farm"
  }
}

let event2: EventData = {
  id: "2",
  title: "Free photoshoot",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  featureImage: 'https://picsum.photos/id/237/200/300',
  link: 'https://morebozourl.com',
  date: new Date(),
  location: {
    latitude: 2,
    longitude: 2,
    address: "6310 Main Street"
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <EventList eventList={[event1, event2]}></EventList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
