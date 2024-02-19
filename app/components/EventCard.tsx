import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EventData } from '../types/EventData';

const window = Dimensions.get("window");


export default function EventCard(props: {container: object, eventData: EventData}) {
    const [challengeData, setEventData] = useState<string[]>([]);

    return (
        <ScrollView contentContainerStyle={props.container}>
            <Image style={styles.img_container} source={{url: props.eventData.featureImage}}></Image>
            
            <View style={styles.description_container}>
                <Text style={styles.titleText}>{props.eventData.title}</Text>
                <Text style={{...styles.baseText, marginVertical: 6, color: "#3B7ECB"}}>Hosted by <Text style={{fontWeight:"700"}}>Rice University</Text></Text>
                
                <View style={styles.information_container}>
                    <View>
                        <Text style={styles.baseText}>{props.eventData.date.toLocaleString()}</Text>
                        <Text style={styles.baseText}>Rice University</Text>
                        <Text style={styles.baseText}>{props.eventData.link}</Text>
                    </View>
                    <Pressable style={styles.registerBtn}>
                        <Text style={{...styles.baseText, color: "white"}}>Register</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.participant_container}>
                <Text>asd</Text>
                <Text>abc</Text>
            </View>
            <View style={styles.challenge_container}></View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    img_container: {
        height: window.height * 0.20,
        width: window.width
    },
    description_container: {
        flexDirection: "column",
        height: "auto",
        width: window.width * 0.9,
        marginVertical: 15,
        backgroundColor: "green"
    },
    information_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 0
    },
    participant_container: {
        height: 230,
        width: window.width * 0.9,
        backgroundColor: "yellow",
        flexDirection: "column",
    },
    challenge_container: {
        height: 230,
        width: window.width * 0.9,
        backgroundColor: "red"
    },
    baseText: {
        flex: 1,
        fontSize: 15, 
        fontWeight: "400", 
        color: "#00426D"
    },
    headerText: {

    },
    titleText: {
        fontWeight: "600",
        fontSize: 27,
        color: "#00426D",
        flex: 1
    },
    registerBtn: {
        height: 45,
        width: 123,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00426D",
        borderRadius: 7

    },
    btnText: {
        fontWeight: "700",
    }

});