import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  )
}
export default Example;