import React from 'react';
import { ScrollView } from 'react-native';

import EventCard from './EventCard'
import { EventData } from "../../types/EventData";

const EventList = (props: { eventList: EventData[] }) => {
    return (
        <ScrollView>
            {props.eventList.map(event => {
                return <EventCard eventData={event} key={event.id}/>
            })}
        </ScrollView>
    )
}

export default EventList;