import React from 'react';

import { ScrollView } from 'react-native';

import AnnouncementCard from './AnnouncementCard'
import { AnnouncementData } from "../../types/AnnouncementData";

const AnnouncementList = (props: { announcementList: AnnouncementData[], navigator: any }) => {
    return (
        <ScrollView>
            {props.announcementList.map(announcement => {
                return <AnnouncementCard announcementData={announcement} key={announcement._id} onPress={() => {
                    props.navigator.navigation.navigate("Anouncement", announcement)}}/>
            })}
        </ScrollView>
    )
}

export default AnnouncementList;