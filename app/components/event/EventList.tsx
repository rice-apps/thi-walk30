import React from 'react';
import { ScrollView } from 'react-native';

import EventCard from './EventCard'
import { EventData } from "../../types/EventData";

const EventList = (props: { eventList: EventData[], navigator: any }) => {
    return (
        <ScrollView>
            {props.eventList.map(event => {
                return <EventCard eventData={event} key={event._id} onPress={() => {
                    props.navigator.navigation.navigate("Event", event);
                }}/>
            })}
        </ScrollView>
    )
}

export default EventList;