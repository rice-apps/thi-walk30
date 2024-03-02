import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import EventCard from './components/EventCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapDisplay from "../components/MapDisplay";



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
function CalendarView() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Calendar View</Text>
        </View>
    )
}
function ListView() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>List View</Text>
        </View>
    )
}
function MapView() {
    return (
        <View style={styles.container}>
          <MapDisplay container={styles.mapContainer}></MapDisplay>
        </View>
      );
}
const Tabs = createBottomTabNavigator();
export default function Events() {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                backgroundColor: "#00426D",
                height: 200,
                top: 0
            },
        }}>
            <Tabs.Screen name="Calendar" component={CalendarView}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{...styles.displayMode, backgroundColor: focused ? "#D9D9D9" : "#00426E"}}>
                <Text style={{...styles.textMode, color: focused ? "#00426E" : "#D9D9D9"}}>Calendar</Text>
            </View>
          )
        }
      }}/>
            <Tabs.Screen name="List" component={ListView}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{...styles.displayMode, backgroundColor: focused ? "#D9D9D9" : "#00426E"}}>
                <Text style={{...styles.textMode, color: focused ? "#00426E" : "#D9D9D9"}}>List</Text>
            </View>
          )
        }
      }}/>
            <Tabs.Screen name="Map" component={MapView}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{...styles.displayMode, backgroundColor: focused ? "#D9D9D9" : "#00426E"}}>
                <Text style={{...styles.textMode, color: focused ? "#00426E" : "#D9D9D9"}}>Map</Text>
            </View>
          )
        }
      }}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5F7FE",
    flex: 1, 
    alignItems: 'center',
    height: "auto",
    justifyContent: 'center',
  },
  mapContainer: {
      width: '100%',
      height: '80%',
  },
  searchBarContainer: {
    width: '100%',
    height: "20%",
    flexDirection: "column",
    backgroundColor: "#00426E",
    alignItems: "center"
  },
  searchBarStyle: {
    backgroundColor: '#00426E', 
    width: "90%", 
    marginTop: "12%", 
    borderRadius: 0, 
    borderTopColor: "#00426E",
    borderBottomColor: "#00426E"

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
    height: "45%",
  },
  displayMode: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 130,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#D9D9D9"
},
textMode: {
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "System",
    textTransform: "capitalize"
    

}
});