import React, { useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const {width, height} = Dimensions.get("window");

/* Adjust map to default pos and zoom, will get default pos from user location */
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POS = {
  latitude: 29.71770,
  longitude: -95.39974,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}

export default function MapDisplay() {
  const mapRef = useRef<MapView>();


  return (
    <MapView 
      style={styles.map} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={INITIAL_POS}
      showsUserLocation
      ref={mapRef}
    />

  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '81%',
    flexDirection: "column"
  },
});