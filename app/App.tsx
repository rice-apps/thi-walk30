import {EventPage} from './eventpage/EventPage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <EventPage title = {"Walk to Defeat ALS Houston"} body = {"Walk with us to help fundraise for ALS patients"} date = {"10/28/2023"} hostorg = {"Texas Heart Institue"} link = {'https://www.techonthenet.com/index.php'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

