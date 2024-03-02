import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MARKERICON from "../assets/images/event-icon.png";
import { EventData } from "../types/EventData";
import ShortEventCard from './ShortEventCard';

const EVENTS_ROUTE = "http://localhost:3000/api/event/events";
const {width, height} = Dimensions.get("window");

/* Adjust map to default pos and zoom, will get default pos from user location */
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let dummy_event = [
  {
    id: "65cfe6e096a2d6a316f46e70",
    title: "Spring Walk",
    description: "Join us for a walking event in the Spring! We will be walking around 5 miles in total.",
    featureImage: "https://studio5.ksl.com/wp-content/uploads/2020/05/walkfeet520-740x493.jpg",
    startTime: "2024-10-17T12:34:03.874Z",
    endTime: "2024-10-17T21:34:03.874Z",
    link: "https://example.com",
    date: "2024-03-15T18:00:00.000Z",
    duration: 180,
    location: {
        latitude: 29.720628,
        longitude: -95.393827,
        address: "6100 Main St, Houston, TX 77005",
        _id: "65cfe6e001bce9780f9897df"
    },
    organization: "65cfda3383058492e13dba01",
    __v: 0
  },
  {
    id: "65cfe6e096a2d6a316f46e70",
    title: "Marathon",
    description: "32km marathon run",
    featureImage: "https://studio5.ksl.com/wp-content/uploads/2020/05/walkfeet520-740x493.jpg",
    startTime: "2024-10-17T12:34:03.874Z",
    endTime: "2024-10-17T21:34:03.874Z",
    link: "https://example.com",
    date: "2024-03-15T18:00:00.000Z",
    duration: 180,
    location: {
      latitude:29.7159701,
      longitude:-95.3975183,
      address: "6100 Main St, Houston, TX 77005",
      _id: "65cfe6e001bce9780f9897df"
    },
    organization: "65cfda3383058492e13dba01",
    __v: 0
  },
  {
    id: "65cfe6e096a2d6a316f46e70",
    title: "400m sprints",
    description: "400m sprints tournament",
    featureImage: "https://studio5.ksl.com/wp-content/uploads/2020/05/walkfeet520-740x493.jpg",
    startTime: "2024-10-17T12:34:03.874Z",
    endTime: "2024-10-17T21:34:03.874Z",
    link: "https://example.com",
    date: "2024-03-15T18:00:00.000Z",
    duration: 180,
    location: {
      latitude:29.71943631523983,
      longitude:-95.3991920282503,
      address: "6100 Main St, Houston, TX 77005",
      _id: "65cfe6e001bce9780f9897df"
    },
    organization: "65cfda3383058492e13dba01",
    __v: 0
  },
  {
    id: "65cfe6e096a2d6a316f46e70",
    title: "Stretching Yoga",
    description: "Yoga event for everyone",
    featureImage: "https://studio5.ksl.com/wp-content/uploads/2020/05/walkfeet520-740x493.jpg",
    startTime: "2024-10-17T12:34:03.874Z",
    endTime: "2024-10-17T21:34:03.874Z",
    link: "https://example.com",
    date: "2024-03-15T18:00:00.000Z",
    duration: 180,
    location: {
      latitude:29.718169113482062,
      longitude:-95.40369813918241,
      address: "6100 Main St, Houston, TX 77005",
      _id: "65cfe6e001bce9780f9897df"
    },
    organization: "65cfda3383058492e13dba01",
    __v: 0
  },

]
export default function MapDisplay(props: {container: object}) {
  const mapRef = useRef<MapView>();
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [selectedEvent, selectEvent] = useState<EventData>(dummy_event[0]);
  const [location, setLocation] = useState();
  const [heightVal, setHeight] = useState("0%");
    
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const result = await (await fetch(EVENTS_ROUTE)).json();
        setEventData(result);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData()
    }, [])

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let INITIAL_POS = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      setLocation(INITIAL_POS);
      
    })();
  }, []);

    
  return (
    <View style={props.container}>
      <MapView
        style={{width: '100%', height: '100%',}} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={location}
        ref={mapRef}
        onPress={() => {setHeight("0%")}}>
          {dummy_event.map((event,index) => {
            return (
              <Marker 
                key={index}
                coordinate={{latitude: event.location.latitude, longitude: event.location.longitude}}
                onPress={(e) => {
                  selectEvent(event);
                  setHeight("40%");
                  e.stopPropagation();
                  }}>
                  <Image source={MARKERICON}/>
              </Marker>
            )
          })}

        </MapView>
        <ShortEventCard 
          container={{...styles.callout_container, height: heightVal}} 
          eventData={selectedEvent}></ShortEventCard>
    </View>


  );
}

const styles = StyleSheet.create({
  callout_container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0
  }
});