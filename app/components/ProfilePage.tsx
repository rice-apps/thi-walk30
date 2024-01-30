import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { EventData } from "../types/EventData";
import WelcomePage from './WelcomePage';
import Dashboard from './dashboard';
import EventList from "./event/EventList";
import ActivityCard from "./profile/ActivityCard";


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
        <ScrollView style = {styles.profilePage}> 
            <WelcomePage profile = {props.profile} image = {props.image}></WelcomePage>
            <View  style = {styles.dashboard}>
                <Dashboard/>
            </View>
            <View style = {styles.activity_card}>
                <ActivityCard/>
            </View>
            <View  style = {styles.dashboard}>
                <EventList eventList = {eventData}></EventList>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        marginTop: 50
    },

    dashboard: {
        flexShrink: 0
    },

    activity_card: {
        borderRadius: 10
    },
})
export default ProfilePage;
