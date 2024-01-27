import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TouchableHighlight, Linking, Image, StyleSheet } from 'react-native';
import { EventData } from '../types/EventData';
import Icon from "@expo/vector-icons/Entypo";
import LocationPin from "@expo/vector-icons/MaterialIcons";

export function EventPage(props: { event: EventData }) {
  const [registerText, setRegisterText] = useState('Register');
  const [showRegister, setShowRegister] = useState(false)
  
  const handleButtonClick = () => {
    setShowRegister(!showRegister);
    if (showRegister) {
      setRegisterText('Register');
    } else {
      setRegisterText('Unregister')
    }
  };

  const onLinkPress = (link:string) => {
    Linking.openURL(link);
  };

  const styles = StyleSheet.create({
    header: {
      color: "#18345c"
    }
  });

  return (
    <ScrollView style={{ backgroundColor: "#f8f4fc" }}> 
      <Image
        style = {{ width: '100%', height: 250}}
        source={{
          uri: props.event.featureImage,
        }}
      />

      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: '600', color: "#18345c", marginBottom: 10 }}>{props.event.title}</Text> 
        {/* BOLD host name */}
        <Text style={{ fontSize: 15, color: "#407ccc", marginBottom: 10 }}>Hosted by {props.event.host}</Text>
        
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Icon name="calendar" size={20} color="#18345c"></Icon>
              <Text style={{ fontSize: 15, marginLeft: 10 }}>{props.event.date.toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5  }}>
              <LocationPin name="location-pin" size={20} color="#18345c"></LocationPin>
              <Text style={{ fontSize: 15, marginLeft: 10 }}>{props.event.location.address}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5  }}>
              <Icon name="link" size={20} color="#407ccc"></Icon>
              <Text style={{ fontSize: 15, marginLeft: 10, color: "#407ccc" }}>{props.event.link}</Text>
            </View>
          </View>
          <View>
            <Button onPress={handleButtonClick} title={registerText} color="#10446c"/>
          </View>
        </View>
        
        
        
        

        {/* <Text style={styles.header}>23 participating</Text>
        <Text style={styles.header}>Challenges</Text>
        <Text style={styles.header}>Event Description</Text>
        <Text>{props.event.description}</Text> */}
      </View>
        
      {/* <TouchableHighlight onPress={() => onLinkPress(props.event.link)}>
        <View>
          <Text style ={{textDecorationLine: 'underline', color: 'blue', marginBottom: 10, marginTop: 10}}>Link title</Text>
        </View>
      </TouchableHighlight>  */}
    </ScrollView>
  );
};



