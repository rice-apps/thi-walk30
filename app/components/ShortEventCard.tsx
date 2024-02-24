import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import VECTORICON from "../assets/images/Vector.png";
import { EventData } from '../types/EventData';




export default function ShortEventCard(props: { container: object; eventData: EventData; navigation}) {
    const [eventData, setEventData] = useState<string[]>([]);
    const {width, height} = Dimensions.get("window");
    const date = new Date(props.eventData.date)

    return (
        <ScrollView 
            style={{...props.container}}
            contentContainerStyle={{alignItems: "center"}}
            onResponderRelease={() => {navigation.navigate("EventCard")}}>
            <Image source={{url: props.eventData.featureImage}} style={styles.img_style}></Image>
            
            <View 
                style={{
                    flexDirection: "row", justifyContent: "space-between", 
                    width: width*0.9, marginTop: 15}}>
                <Text style={styles.h1}>{props.eventData.title}</Text>
                <Text style={styles.h1}>{date.getMonth()}/{date.getDate()}</Text>
            </View>
            <View 
                style={{
                    flexDirection: "row", justifyContent: "space-between", 
                    width: width*0.9, marginTop: 2}}>
                <View style={{flexDirection: "row"}}>
                    <Image source={VECTORICON}></Image>
                    <Text style={styles.h2}> Rice University</Text>
                </View>
                <Text style={styles.h2}>{date.getMonth()}/{date.getDate()}</Text>
            </View>
            <Pressable style={styles.btn_style}>
                <Text style={{color: "#464646", fontWeight: "400", fontSize: 18}}>Register</Text>
            </Pressable>
            <View style={{height: 50}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    img_style: {
        width: "100%",
        height: 150
    },
    h1: {
        fontWeight: "600",
        fontSize: 20,

    },
    h2: {
        color: "#959595",
        fontWeight: "400",
        fontSize: 16
    },
    btn_style: {
        width: 200,
        height: 50,
        backgroundColor: "white",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#464646"
        
    }
  });