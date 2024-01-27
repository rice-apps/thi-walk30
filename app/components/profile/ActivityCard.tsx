import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function Dashboard() {
    const [dashInfo, setDashInfo] = useState({ Steps: 10, Distance: "10km", Time: "3:00" });

    return (
        <View style={{paddingTop: 25}}>
            <Text variant="titleLarge" style = {styles.text}>My Activity</Text>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.tab}>Steps</Text>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.tab}>Distance</Text>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.tab}>Time</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#00426D",
        borderRadius: 10,
        justifyContent: "space-around",
        margin: 10,
        fontSize: 20
    },
    subcontainer: {
        padding: 15,
        justifyContent: "space-between",
        fontSize: 20
    },
    tab: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 500,

    },
    text: {
        flex: 1,
        marginLeft: 15,
        fontWeight: "600"
    },
    userInfo: {
        fontWeight: "bold"
    }
})