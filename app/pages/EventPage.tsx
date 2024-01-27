import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableHighlight, Linking, Image } from 'react-native';
import { LinkData } from '../types/LinkData';

export function EventPage(props: { title: string; body: string; date: string; hostorg: string; linkMap: LinkData[] }) {
  const [registerText, setRegisterText] = useState('I plan to attend');
  const [showRegister, setShowRegister] = useState(false)
  
  const handleButtonClick = () => {
    setShowRegister(!showRegister);
    if (showRegister) {
      setRegisterText('I plan to attend');
    } else {
      setRegisterText('Registered!\n\n Not attending? Click here to unregister.')
    }
  };

  const onLinkPress = (link:string) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView style={{ margin: 10, flexDirection: 'column' }}>
      
      <Image
        style = {{marginTop: 30, width: 400, height:300}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      
      <Text style = {{textAlign: 'center', fontSize: 30, marginBottom:50}}>{props.title}</Text> 
      <View>
        <Text style = {{fontFamily: 'Arial', fontSize: 18, marginBottom: 25}}>{props.body}</Text>
        <Text style = {{marginBottom: 15}}>When: {props.date}</Text>
        <Text style = {{marginBottom: 15}}>Hosting Organization: {props.hostorg}</Text>
      </View>
  
      <Button onPress={handleButtonClick} title={registerText} />
      <Text style = {{marginTop: 15, fontSize:20}}>Relevant Links</Text>
        
      {props.linkMap.map((links) => (
          <TouchableHighlight onPress={() => onLinkPress(links.url)}>
          <View>
            <Text style ={{textDecorationLine: 'underline', color: 'blue', marginBottom: 10, marginTop: 10}}>{links.title}</Text>
          </View>
        </TouchableHighlight> 
        ))}

    </ScrollView>
  );
};



