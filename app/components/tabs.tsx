import React from 'react';
// import EventCard from './components/EventCard';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from 'react-native';
import ANNOUNCEMENTS from "../assets/images/announcements.png";
import ANNOUNCEMENTS_SELECTED from "../assets/images/announcements_selected.png";
import EVENTS from "../assets/images/events.png";
import EVENTS_SELECTED from "../assets/images/events_selected.png";
import HOME from "../assets/images/home.png";
import HOME_SELECTED from "../assets/images/home_selected.png";
import RESOURCE from "../assets/images/resource.png";
import RESOURCE_SELECTED from "../assets/images/resource_selected.png";
import { Announcement, Events, Home, Resources } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: "9%",
            backgroundColor: "#fff",
        }
    }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{marginTop: 15}}>
                <Image source={focused ? HOME_SELECTED : HOME}></Image>
            </View>
          )
        }
      }}/>
      <Tab.Screen name="Events" component={Events}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{marginTop: 15}}>
                <Image source={focused ? EVENTS_SELECTED : EVENTS}></Image>
            </View>
          )
        }
      }}/>
      <Tab.Screen name="Resources" component={Resources}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{marginTop: 15}}>
                <Image source={focused ? RESOURCE_SELECTED : RESOURCE}></Image>
            </View>
          )
        }
      }}/>
      <Tab.Screen name="Announcements" component={Announcement}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{marginTop: 15}}>
                <Image source={focused ? ANNOUNCEMENTS_SELECTED : ANNOUNCEMENTS}></Image>
            </View>
          )
        }
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;