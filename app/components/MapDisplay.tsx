import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MARKERICON from "../assets/images/event-icon.png";
import { EventData } from "../types/EventData";

const EVENTS_ROUTE = "http://localhost:3000/api/event/events";
const {width, height} = Dimensions.get("window");

/* Adjust map to default pos and zoom, will get default pos from user location */
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let dummy_event = [
  {location: {latitude:29.720628,longitude:-95.393827}},
  {location: {latitude:29.7159701,longitude:-95.3975183}},
  {location: {latitude:29.71943631523983,longitude:-95.3991920282503}},
  {location: {latitude:29.718169113482062,longitude:-95.40369813918241}},

]
export default function MapDisplay(props: {container: object}) {
  const mapRef = useRef<MapView>();
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
    
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
    <MapView
      style={props.container} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={location}
      
      ref={mapRef}>
        {dummy_event.map((event,index) => {
          return (
            <Marker 
              key={index}
              coordinate={{latitude: event.location.latitude, longitude: event.location.longitude}}
            >
                <Image source={MARKERICON}/>
            </Marker>
          )
        })}
      </MapView>

  );
}
