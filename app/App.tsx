import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomePage from './components/welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage profile = "My profile name" image = "hi"></WelcomePage>
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
