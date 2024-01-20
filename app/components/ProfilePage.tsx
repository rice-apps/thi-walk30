import react from 'react';
import {Text, View, StyleSheet} from 'react-native';
import WelcomePage from './WelcomePage';
import EventList from "./event/EventList"
import { EventData } from "../types/EventData";
import React, {useState, useEffect} from "react"
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Dashboard from './dashboard';


const EVENTS_ROUTE = "http://localhost:3000/api/event/events";

type props = {
    profile: string,
    image: string,
}

function ProfilePage(props: props) { 
    const [eventData, setEventData] = useState<EventData[]>([]);
    
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const result = await (await fetch(EVENTS_ROUTE)).json();
                setEventData(result);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEventData()

    }, [])

    return (
        <View style = {styles.profilePage}> 
            <WelcomePage profile = {props.profile} image = {props.image}></WelcomePage>
            <View  style = {styles.dashboard}>
                <Dashboard/>
            </View>
            <View  style = {styles.dashboard}>
                <EventList eventList = {eventData}></EventList>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        marginTop: 50
    },

    dashboard: {
        flexShrink: 0
    }
})
export default ProfilePage;