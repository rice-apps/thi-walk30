import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableHighlight, Linking, Image, FlatList } from 'react-native';  // <-- Import TouchableHighlight

interface LinkData {
  title: string,
  url: string
}
export function AnnouncementPage(props: { title: string; body: string; linkMap: LinkData[]}) {

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
      </View>
  
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
