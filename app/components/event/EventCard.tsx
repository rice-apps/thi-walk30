import React from 'react';
import { Card } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';

import { EventData } from "../../types/EventData";

const EventCard = (props: { eventData: EventData }) => {
    const styles = StyleSheet.create({
        eventCard: {
            width: "100%",
            flexWrap: 'wrap',
            flexDirection: 'row',
            padding: "4%",
        },

        eventTitle: {
            width: "75%",
        },

        eventDate: {
            width: "25%"
        },

        eventLocation: {
            width: "58%"
        },

        eventTime: {
            width: "42%"
        }
    });


    return (
        <Card style={{ margin: 15 }}>
            <View style={styles.eventCard}>
                <View style={styles.eventTitle}>
                    <Text
                        numberOfLines={1}
                        style={{ fontSize: 25, textAlign: 'left' }}
                    >
                        {props.eventData.title}
                    </Text>
                </View>
                <View style={styles.eventDate}>
                    <Text
                        numberOfLines={1}
                        style={{ fontSize: 20, textAlign: 'right' }}
                    >
                        {props.eventData.date.toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}
                    </Text>
                </View>
                <View style={styles.eventLocation}>
                    <Text 
                        numberOfLines={1} 
                        style={{ fontSize: 15, textAlign: 'left', color: 'gray' }}
                    >
                        {props.eventData.location.address}
                    </Text>
                </View>
                <View style={styles.eventTime}>
                    <Text 
                        numberOfLines={1} 
                        style={{ fontSize: 15, textAlign: 'right', color: 'gray' }}
                    >
                        {props.eventData.startTime} - {props.eventData.endTime}
                    </Text>
                </View>
            </View>
        </Card>
    );
}

export default EventCard;