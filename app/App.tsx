import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventSearchBar from './components/EventSearchBar';
import MapDisplay from "./components/MapDisplay";
import TabNavigation from './components/TabNavigation';
export default function App() {
  return (
    <View style={styles.container}>
      <EventSearchBar container={styles.searchBarContainer}></EventSearchBar>
      <MapDisplay container={styles.mapContainer}></MapDisplay>
      <TabNavigation container={styles.tabNavigationContainer}></TabNavigation>
    </View>
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
  mapContainer: {
      width: '100%',
      height: '72%',
      flexDirection: "column"
  },
  searchBarContainer: {
    width: '100%',
    height: "19%",
    flexDirection: "column",
    backgroundColor: "#00426E",
    alignItems: "center"
  },
  tabNavigationContainer: {
    width: '100%',
    height: "9%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginHorizontal: 10,
  }
});
