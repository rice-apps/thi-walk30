import { SearchBar } from "@rneui/themed";
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function EventSearchBar() {
    return(
        <View style={styles.container}>
            <SearchBar style={{marginTop: 10}}></SearchBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "20%",
        flexDirection: "column",
        backgroundColor: "#00426E",

    },
    searchBar: {
        position: "absolute",
        width: "90%",
        height: "30%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset:{width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 8
    }
  });