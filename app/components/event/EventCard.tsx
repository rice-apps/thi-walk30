import React from 'react';
import { Card } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { EventData } from "../../types/EventData";
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';

const EventCard = (props: { eventData: EventData }) => {
    const styles = StyleSheet.create({
        eventCard: {
            display: "flex",
            width: "100%",
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            padding: "4%",
        },

        eventImage: {
            width: "22%",
            height: 0,
            paddingTop: "22%",
            borderRadius: 2
        },

        eventDetails: {
            width: "75%",
            gap: 15,
            flexDirection: 'column',
        },

        eventTitle: {
            fontSize: 20,
            fontWeight: "bold",
        },

        eventDateTime: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 50,
        },
    });


    return (
        <Card style={{margin : 15}}>
            <Card.Content style={styles.eventCard}>
                <Image style={styles.eventImage} source={{ uri: props.eventData.featureImage}}/>
                <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle} numberOfLines={1} >
                        {props.eventData.title}
                    </Text>
                    <View style={styles.eventDateTime}>
                        <Text>
                            {props.eventData.startTime} - {props.eventData.endTime}
                        </Text>
                        <Text>
                            {props.eventData.date.toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}
                        </Text>
                    </View>
                </View>    
            </Card.Content>
        </Card>
    );
}

export default EventCard;