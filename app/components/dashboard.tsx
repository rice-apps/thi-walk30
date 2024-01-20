import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { useState } from 'react';



export default function Dashboard(){
    const [dashInfo, setDashInfo] = useState({Steps: 130,Distance: "10 MI",Time: "40 MIN"});
    return(
        <View>
            <View>
                <Text style={styles.today}>Today</Text>
            </View>
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
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 0,
        flexDirection: "row",
        backgroundColor: "#103158",
        
        borderRadius:10,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        margin: 10,
        fontSize:20,
        display: "flex"
    },
    subcontainer: {
        //flexDirection: "column",
        padding:15,
        justifyContent:"space-between",
        fontSize:20,
        
    },
    text:{
        marginBottom:10,
        
    },

    today:{
        marginTop: 12,
        marginLeft:10,
        fontSize: 20,
        fontWeight: "500"

        
    },
    text_activity: {
        fontWeight: "300",
        fontSize: 15,
        marginBottom: 8,
        color: "white"
    },

    userInfo:{
        fontWeight:"600",
        color: "white"
    }
})