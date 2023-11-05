<<<<<<< HEAD
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
=======
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77


function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
<<<<<<< HEAD
  const [value, setValue] = useState()
=======
  const [value, setValue] = useState("1")
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
<<<<<<< HEAD
      onChange={setValue}/>
  )
}
export default Example;
=======
      onChange={() =>setValue("2")}/>
  )
}

export default Example;





/*

//
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
*/
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77
