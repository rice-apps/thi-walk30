import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/dashboard';
export default function App() {
  return (
    <View style={styles.container}>
      
      <Dashboard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
