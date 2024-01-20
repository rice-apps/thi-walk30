import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { useState } from 'react';



export default function Dashboard(){
    const [dashInfo, setDashInfo] = useState({Steps: 10,Distance: "10km",Time: "3:00"});
    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.text_activity}>Steps</Text>
                <Text style={styles.userInfo}>{dashInfo.Steps}</Text>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.text_activity}>Distance</Text>
                <Text style={styles.userInfo}>{dashInfo.Distance}</Text>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.text_activity}>Time</Text>
                <Text style={styles.userInfo}>{dashInfo.Time}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 0,
        flexDirection: "row",
        backgroundColor: "rgba(230,230,230,10)",
        borderRadius:10,
        justifyContent: "space-around",
        margin: 10,
        fontSize:20,
        display: "flex"
    },
    subcontainer: {
        //flexDirection: "column",
        padding:15,

        justifyContent:"space-between",
        fontSize:20


    },
    text:{
        marginBottom:10,
    },
    text_activity: {
        fontWeight: "300",
        fontSize: 15
    },
    
    userInfo:{
        fontWeight:"bold"
    }
})