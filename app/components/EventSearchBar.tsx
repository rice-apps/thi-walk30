import { SearchBar } from "@rneui/themed";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EventSearchBar(props: {container: object}) {
    return(
        <View style={props.container}>
            <SearchBar
                inputStyle={{backgroundColor: 'white'}}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={{backgroundColor:"white", borderRadius: 10}}
                placeholderTextColor={'#404040'}
                placeholder={'Search for events'}
                showCancel={false}>
            </SearchBar>
            <View style={styles.eventViewContainer}>
                <View style={styles.displayMode}><Text style={styles.textMode}>Calendar</Text></View>
                <View style={styles.displayMode}><Text style={styles.textMode}>List</Text></View>
                <View style={styles.displayMode}><Text style={styles.textMode}>Map</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: '#00426E', 
        width: "90%", 
        marginTop: "12%", 
        borderRadius: 0, 
        borderTopColor: "#00426E",
        borderBottomColor: "#00426E"

    },
    eventViewContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#00426D",
        justifyContent: "space-between",
        marginTop: 10
    },
    displayMode: {
        flex: 1,
        backgroundColor: "#00426D",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 37,
        marginHorizontal: 8,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#D9D9D9"
    },
    textMode: {
        fontWeight: "500",
        fontSize: 18,
        color: "#D9D9D9",
        

    }
});