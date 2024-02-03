import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import { AnnouncementPage } from "./pages/AnnouncementPage";
import { EventPage } from "./pages/EventPage";
import { EventList } from "./pages/EventList";
import { EventCalendar } from "./pages/EventCalendar";

export default function App() {
//   const exampleLink: LinkData = {
//     title: "More Information",
//     url: "https://www.example.com",
// };
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <AnnouncementPage title = {"Pumpkin-Carving and Costume Contests Ensure a Festive Halloween at THI"}
      body= {"The team from Administration and Development — including Henry Aceves, Karen Gunay, Tanya Rojas, Daphne Singleterry, Marcia Strauss, Julie Voss, and Sheila Vrana — ultimately took home first place for their “Deep in the Heart of Texas” operating room vignette, complete with surgeon and patient."} 
      linkMap={[exampleLink]}/>
      <StatusBar style="auto" /> */}
      {/* <EventPage title = {"Title"} body = {"body text"} date = {"date"} hostorg = {"hostorg"} linkMap = {[exampleLink]}/> */}
      {/* <EventList /> */}
      <EventCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
