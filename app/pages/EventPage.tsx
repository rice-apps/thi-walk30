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
      color: "#18345c",
      marginBottom: 10,
      marginTop: 10,
      fontSize: 18,
      fontWeight: '600'
    },
    iconTextPair: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    iconText: {
      marginLeft: 10,
      fontSize: 15,
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
        {/* TODO: BOLD host name */}
        <Text style={{ fontSize: 15, color: "#407ccc", marginBottom: 15 }}>Hosted by {props.event.host}</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.iconTextPair}>
              <Icon name="calendar" size={20} color="#18345c"></Icon>
              <Text style={styles.iconText}>{props.event.date.toLocaleDateString(undefined, {month: "short", day: "numeric", year: "numeric"})}</Text>
            </View>

            <View style={styles.iconTextPair}>
              <LocationPin name="location-pin" size={20} color="#18345c"></LocationPin>
              <Text style={styles.iconText}>{props.event.location.address}</Text>
            </View>

            {/* TODO: cut off link if too long */}
            <View style={styles.iconTextPair}>
              <Icon name="link" size={20} color="#407ccc"></Icon>
              <TouchableHighlight onPress={() => onLinkPress(props.event.link)}>
                <Text style={{ fontSize: 15, marginLeft: 10, color: "#407ccc"}}>{props.event.link}</Text>
              </TouchableHighlight>   
            </View>
          </View>
          {/* TODO: style button */}
          <Button onPress={handleButtonClick} title={registerText} color="#10446c"/>
        </View>

        <Text style={styles.header}>23 participating</Text>
        <Text style={styles.header}>Challenges</Text>
        <Text style={styles.header}>Event Description</Text>
        <Text>{props.event.description}</Text>
      </View>
    </ScrollView>
  );
};



