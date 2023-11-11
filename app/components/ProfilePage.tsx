import react from 'react';
import {Text, View} from 'react-native';
import WelcomePage from './WelcomePage';
import EventList from "./event/EventList"
import { EventData } from "../types/EventData";
import React from "react"


type props = {
    profile: string,
    image: string,
}

function getEvents(): EventData[] {
    fetch("https://localhost:3000/api/events")
    .then(data => {return data.()});
    return [];
}

function ProfilePage(props: props) { 
    return (
        <View>
            <WelcomePage profile = {props.profile} image = {props.image}></WelcomePage>
            <View>
                {/*Put Activity Card Here*/}
                <Text>Imagine we have an activity card here</Text>
            </View>
            <View>

                <EventList eventList = {[]}></EventList>
            </View>
      </View>
    )
}

export default ProfilePage;