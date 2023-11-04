import React = require('react');
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import EventCard from './EventCard'
import { EventData } from "../../types/EventData";

const EventList = (props: { eventList: EventData[] }) => {
    return (
        <ScrollView>
            <Text variant="titleLarge">Upcoming Events</Text>
            {props.eventList.map(event => {
                return <EventCard eventData={event} key={event.id}/>
            })}
        </ScrollView>
    )
}

export default EventList;