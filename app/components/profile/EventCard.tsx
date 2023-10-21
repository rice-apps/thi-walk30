import React from "react";
import { Card, Text } from 'react-native-paper'

import { EventData } from "../../types/EventData";

// const LeftContent = props => {
//     <Card.Content>
//         <Text>{props.eventData.description}</Text>
//     </Card.Content>  
// } // idk how to do the props thing

const EventCard = (props: { eventData: EventData }) => {
    return (
        <Card style={{margin: 15}}>
            <Card.Cover source={{ uri: props.eventData.featureImage}}/>
            <Card.Title title={props.eventData.title} titleVariant="displaySmall"/>
            <Card.Content>
                <Text variant="bodyLarge">
                    <>{props.eventData.date.getMonth()}/{props.eventData.date.getDay()}</>
                </Text>
                <Text variant="bodyLarge">{props.eventData.location.address}</Text>
                <Text>{props.eventData.description}</Text>
                <Text>For more info, visit: {props.eventData.link}</Text>
            </Card.Content>
        </Card>
    );
}

export default EventCard;