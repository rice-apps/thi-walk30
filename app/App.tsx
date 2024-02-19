import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventCard from './components/EventCard';
// import EventSearchBar from './components/EventSearchBar';
// import MapDisplay from "./components/MapDisplay";
// import TabNavigation from './components/TabNavigation';

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
export default function App() {
  return (
    <View style={styles.container}>
      {/* <EventSearchBar container={styles.searchBarContainer}></EventSearchBar>
      <MapDisplay container={styles.mapContainer}></MapDisplay>
      <TabNavigation container={styles.tabNavigationContainer}></TabNavigation> */}
      <EventCard container={styles.FullEventContainer} eventData={dummy_event}></EventCard>
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
  },
  FullEventContainer: {

    flexDirection: "column",
    flexGrow: 1, 
    alignItems: "center",
  },
  PartialEventContainer: {
    width: '100%',
    height: "35%",
  }
});
