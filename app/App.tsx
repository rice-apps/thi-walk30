import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AnnouncementPage} from './announcementspage/announcementpage';

export default function App() {
  interface LinkData {
    title: string,
    url: string
  }
  const linkArray: LinkData[] = [
    { title: 'Example 1', url: 'https://www.example1.com' },
    { title: 'Example 2', url: 'https://www.example2.com' },
  ];
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <AnnouncementPage title = {"Walk to Defeat ALS Houston"} body = {"Walk with us to help fundraise for ALS patients"} linkMap = {linkArray}>announcements </AnnouncementPage>
      <StatusBar style="auto" />
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
