import React from 'react'
import {View, Text} from 'react-native'

export function Dashboard(props) {
    return (
        <View style={{
                backgroundColor: 'light gray', 
                flexDirection: 'row', 
                height: 100,
                padding: 20
                }}>
            <Text>Steps </Text>
            <Text>Distance </Text>
            <Text>Time </Text>
        </View>
    )
}