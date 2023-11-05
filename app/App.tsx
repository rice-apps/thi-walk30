<<<<<<< HEAD
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function test() {
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example from './components/sign-in';

export default function App() {
  return (
    <View style={styles.container}>
      <Example></Example>
      <StatusBar style="auto" />
    </View>
  );
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77
}
function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange = setValue/>
  )
}
export default Example;