import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ANNOUNCEMENTS from "../assets/images/announcements.png";
import EVENTS from "../assets/images/events.png";
import HOME from "../assets/images/home.png";
import RESOURCE from "../assets/images/resource.png";


export default function TabNavigation(props: {container: object}) {
    return(
        <View style={props.container}>
            <View style={styles.tab_item}><Image source={HOME}/></View>
            <View style={styles.tab_item}><Image source={EVENTS}/></View>
            <View style={styles.tab_item}><Image source={RESOURCE}/></View>
            <View style={styles.tab_item}><Image source={ANNOUNCEMENTS}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    tab_item: {
        flexDirection: "row",
        marginTop: 10,
    }
});