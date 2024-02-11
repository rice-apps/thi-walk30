import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type props = {
    profile: string,
    image: string,
}

/* Temporary CSS style sheet to align basic components */ 
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 20,
        alignItems: "center",
        marginLeft: 20
    },
    image: {
      width: 66,
      height: 66,
      borderRadius: 30,
    //   borderColor: "black", 
    //   borderWidth: 2,
    },
    text_large : {
        fontSize: 23,
        fontWeight: "600",
    },
    text_small : {
        fontSize: 18,
        fontWeight: "400"
    }

  });
  

function WelcomePage() {
    return (
        <View style={{paddingTop: 60}}>
            <View></View>
            <View style = {styles.row}>
                <Image style={styles.image} source={{uri: props.image}}></Image>
                <View>
                    <Text style = {styles.text_small}>Welcome,</Text>
                    <Text style = {styles.text_large}>{props.profile}</Text>
                </View>
            </View>
        </View>
    )
}

export default WelcomePage;