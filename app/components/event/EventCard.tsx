import React from 'react';
import { Card } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { EventData } from "../../types/EventData";

const EventCard = (props: { eventData: EventData, onPress: () => void }) => {
    const styles = StyleSheet.create({
        eventCard: {
            display: "flex",
            width: "100%",
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 5,
        },

        eventImage: {
            width: "22%",
            height: 0,
            paddingTop: "22%",
            borderRadius: 5
        },

        eventDetails: {
            width: "75%",
            gap: 15,
            flexDirection: 'column',
        },

        eventTitle: {
            fontSize: 21,
            fontWeight: "500",
        },

        eventDateTime: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 50,
        },

        eventLogistics: {
            fontSize: 17,
        }
    });

    let date = new Date(props.eventData.date);
    let dateString = date.toLocaleDateString(undefined, { month: "numeric", day: "numeric" });
    let timeString = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: true});

    let endTime = new Date(date);
    endTime.setMinutes(endTime.getMinutes() + props.eventData.duration);
    timeString += " - " + endTime.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: true});

    return (
        <Card style={{
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 5,
        }}
        onPress={props.onPress}>
            <Card.Content style={styles.eventCard}>
                <Image style={styles.eventImage} source={{ uri: props.eventData.img}}/>
                <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle} numberOfLines={1} >
                        {props.eventData.title}
                    </Text>
                    <View style={styles.eventDateTime}>
                        <Text style={styles.eventLogistics}>
                            {timeString}
                        </Text>
                        <Text style={styles.eventLogistics}>
                            {dateString}
                        </Text>
                    </View>
                </View>    
            </Card.Content>
        </Card>
    );
}

export default EventCard;