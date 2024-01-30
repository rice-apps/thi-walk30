import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';



export default function Dashboard(){
    const [dashInfo, setDashInfo] = useState({Steps: 130,Distance: "1.3 MI",Time: "40 MIN"});
    return(
        <View style={{paddingTop: 15}}>
            <Text variant="titleLarge" style = {styles.text}>Today</Text>
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
        backgroundColor: "#00426D",
        borderRadius:10,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        margin: 10,
        fontSize:20,
        display: "flex"
    },
    subcontainer: {
        padding:15,
        justifyContent:"space-between",
        fontSize:20
    },
    text: {
        flex: 1,
        marginLeft: 15,
        fontWeight: "600"
    },
    text_activity: {
        fontWeight: "400",
        fontSize: 15,
        color: "white",
        paddingBottom: 10
    },

    userInfo:{
        fontWeight:"500",
        color: "white",
        fontSize: 16
    }
})