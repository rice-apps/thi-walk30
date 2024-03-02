import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BACK_BTN from "../assets/images/back_btn.png";
import CHALLENGE_ICON from "../assets/images/challenge_icon.png";
import { EventData } from '../types/EventData';

const window = Dimensions.get("window");


export default function EventCard(props: {container: object, eventData: EventData}) {
    const [challengeData, setEventData] = useState<string[]>([]);

    return (
        <ScrollView contentContainerStyle={props.container}>
            <Image style={styles.img_container} source={{url: props.eventData.featureImage}}></Image>
            <Pressable style={styles.back_btn} onPress={() => {}}>
                <Image source={BACK_BTN}></Image>
            </Pressable>

            <View style={styles.description_container}>
                <Text style={styles.titleText}>{props.eventData.title}</Text>
                <Text style={{...styles.baseText, marginVertical: 10, color: "#3B7ECB"}}>Hosted by <Text style={{fontWeight:"700"}}>Rice University</Text></Text>
                
                <View style={styles.information_container}>
                    <View>
                        <Text style={styles.baseText}>{(new Date(props.eventData.date)).toLocaleDateString()}</Text>
                        <Text style={{...styles.baseText, marginVertical: 3}}>Rice University</Text>
                        <Text style={styles.baseText}>{props.eventData.link}</Text>
                    </View>
                    <Pressable style={styles.registerBtn}>
                        <Text style={{...styles.btnText, color: "white"}}>Register</Text>
                    </Pressable>
                </View>
            </View>


            <View style={styles.participant_container}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.headerText}>23 Participating</Text>
                    <Pressable><Text style={{fontSize: 14, fontWeight: "400", color: "#00426D"}}>See leaderboard</Text></Pressable>
                    
                </View>
                <View style={{flexDirection: "row"}}>
                    {[1,1,1,1,1,1,1].map((i) => {
                        return (
                            <View style={styles.circle_frame}></View>
                        )
                    })}
                </View>
            </View>


            <View style={styles.challenge_container}>
                <Text style={{...styles.headerText}}>Challenges</Text>
                {["Run 5k under 25 minutes","Invite 4 friends"].map((challenge_text) => {
                    return(
                        <View style={styles.challenge_box}>
                            <Image source={CHALLENGE_ICON} style={{marginLeft: 20}}></Image>
                            <Text style={styles.challenge_text}>{challenge_text}</Text>
                        </View>
                    )
                })}
            </View>


            <View style={styles.event_description_container}>
                <Text style={styles.headerText}>Event Description</Text>
                <Text style={styles.baseText}>{props.eventData.description}</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    img_container: {
        height: window.height * 0.23,
        width: window.width
    },
    description_container: {
        flexDirection: "column",
        height: "auto",
        width: window.width * 0.9,
        marginTop: 15,

    },
    information_container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    participant_container: {
        height: "auto",
        width: window.width * 0.9,
        flexDirection: "column",
        marginVertical: 15,
    },
    challenge_container: {
        height: "auto",
        width: window.width * 0.9,
    },
    baseText: {
        fontSize: 15, 
        fontWeight: "400", 
        color: "#00426D",
        
    },
    headerText: {
        fontSize: 18, 
        fontWeight: "600", 
        color: "#00426D", 
        marginBottom: 10
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
        borderRadius: 6,
        bottom: -13
    },
    btnText: {
        fontWeight: "700",
        fontSize: 18
    },
    circle_frame: {
        width: (window.width*0.9)/7-7,
        height: (window.width*0.9)/7-7,
        borderRadius: ((window.width*0.9)/7-7)/2,
        backgroundColor: "black",
        marginRight: 8
     },
     challenge_text: {
        fontWeight: "500",
        fontSize: 18,
        color: "#00426D",
        marginLeft: 20
     },
     challenge_box: {
        backgroundColor: "white",
        marginBottom: 9,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        height: 67,
        shadowColor: "#333",
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
     },
     event_description_container: {
        height: "auto",
        width: window.width * 0.9,
        marginTop: 10
     },
     description_text: {
        fontSize: 20, 
        fontWeight: "600", 
        color: "#00426D",

     },
     back_btn: {
        position: "absolute",
        height: "auto",
        width: "auto",
        left: "3%",
        top: "6%"
     }

});