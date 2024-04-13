import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapDisplay from "../components/MapDisplay";


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
function MapView(props: { navigator: any }) {
    return (
        <View style={styles.container}>
          <MapDisplay container={styles.mapContainer} navigator={props.navigator}></MapDisplay>
        </View>
      );
}

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#00426D",
        height: 200,
        width: "100%",
        top: 0,
        flexDirection: "column",
        justifyContent: "space-around",
      }}>
      <View
      style={{width: "100%", height: 50, backgroundColor: "white", marginTop: 40, alignItems: "center", justifyContent: "center"}}><Text>Search Bar Goes Here</Text></View>
      <View style={{flexDirection: "row", left: 0, width: "100%", justifyContent: "space-around"}}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const {options} = descriptors[route.key];
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }
          return (
            <TouchableOpacity 
              key={index}
              onPress={() => {onPress()}}
              >
              {index === 0 && (
                <View style={{...styles.displayMode, backgroundColor: isFocused ? "#D9D9D9" : "#00426E"}}>
                  <Text style={{...styles.textMode, color: isFocused ? "#00426E" : "#D9D9D9"}}>Calendar</Text>
                </View>
              )}
              {index === 1 && (
                <View style={{...styles.displayMode, backgroundColor: isFocused ? "#D9D9D9" : "#00426E"}}>
                  <Text style={{...styles.textMode, color: isFocused ? "#00426E" : "#D9D9D9"}}>List</Text>
                </View>
              )}
              {index === 2 && (
                <View style={{...styles.displayMode, backgroundColor: isFocused ? "#D9D9D9" : "#00426E"}}>
                  <Text style={{...styles.textMode, color: isFocused ? "#00426E" : "#D9D9D9"}}>Map</Text>
                </View>
              )}
            </TouchableOpacity>
          )
        })}
      </View>
      
    </View>
  )
}
const Tabs = createBottomTabNavigator();
export default function Events(props: {navigator: any}) {
  return (
      <Tabs.Navigator 
      tabBar={(props)=> <CustomTabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
        <Tabs.Screen name="Calendar" component={CalendarView}/>
        <Tabs.Screen name="List" component={ListView}/>
        <Tabs.Screen name="Map" children={() => <MapView navigator={props.navigator} />}/>
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
    alignItems: "center",
    marginTop: 15,
    borderColor: "white"
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
});