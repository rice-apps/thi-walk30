import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from "react-native-paper";

import { EventData } from "../../types/EventData";
import EventCard from './EventCard';

const EventList = (props: { eventList: EventData[] }) => {
    return (
        <ScrollView>
            <Text variant="titleLarge" style = {styles.text}>My Events</Text>
            {props.eventList.map(event => {
                return <EventCard eventData={event} key={event._id}/>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        marginLeft: 15,
        fontWeight: "600"
    },
})
export default EventList;