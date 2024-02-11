import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventSearchBar from './components/EventSearchBar';
import MapDisplay from "./components/MapDisplay";
import TabNavigation from './components/TabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <EventSearchBar></EventSearchBar>
      <MapDisplay></MapDisplay>
      <TabNavigation></TabNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5F7FE",  
  },
});
