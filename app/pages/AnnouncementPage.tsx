import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableHighlight, Linking, Image, FlatList, SafeAreaView } from 'react-native';  // <-- Import TouchableHighlight

interface LinkData {
  title: string,
  url: string
}
export function AnnouncementPage(props: { title: string; body: string; hostingOrg: string; linkMap: LinkData[]}) {

  const onLinkPress = (link:string) => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{flexDirection: 'column' }}>
        
        <Image
          style = {{width: '100%', height:300}}
          source={{
            uri: 'https://www.texasheart.org/wp-content/uploads/2023/11/IMG_8671.jpeg',
          }}
        />

        <Text style= {{color: 'rgb(16, 49, 88)', fontSize: 35, fontWeight:'600', paddingVertical:10, marginLeft:10}}>{props.hostingOrg}</Text>
        
        <Text style = {{color: 'rgb(16, 49, 88)', fontSize: 30, marginLeft:10, marginBottom:50, fontWeight:'500'}}>{props.title}</Text> 
        <View>
          <Text style = {{fontFamily: 'Arial', fontSize: 18, marginBottom: 25, marginLeft:10}}>{props.body}</Text>
        </View>
    
        <Text style = {{marginTop: 15, fontSize:20, textAlign:'center'}}>Relevant Links</Text>
        
          {props.linkMap.map((links) => (
            <TouchableHighlight onPress={() => onLinkPress(links.url)}>
            <View>
              <Text style ={{textDecorationLine: 'underline', color: 'blue', marginBottom: 10, marginTop: 10, textAlign:'center', paddingBottom:20}}>{links.title}</Text>
            </View>
          </TouchableHighlight> 
          ))}
        
        
        {/* <TouchableHighlight onPress={onLinkPress}>
          <View>
            <Text style ={{textDecorationLine: 'underline', color: 'blue', marginBottom: 10, marginTop: 10}}>TechOnTheNet</Text>
          </View>
        </TouchableHighlight> */}
      </ScrollView>
    </SafeAreaView>
  );
};
