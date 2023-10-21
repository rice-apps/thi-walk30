import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './components/profile/dailydashboard'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Dashboard></Dashboard>
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
