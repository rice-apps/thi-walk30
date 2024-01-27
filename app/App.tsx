import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePage from './components/ProfilePage';
import React from 'react'

/* Hard coding default values, these will be retrieved from DB later */
const profile_name: string = "Evan Stegall"
const image_uri: string = "https://as1.ftcdn.net/v2/jpg/01/15/81/62/1000_F_115816289_debDt9gwn937E0AxKBP9D1zlYFsvCV9g.jpg"


export default function App() {
  return (
    <View style={styles.container}>
      <ProfilePage profile = {profile_name} image = {image_uri}></ProfilePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FD",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
});
