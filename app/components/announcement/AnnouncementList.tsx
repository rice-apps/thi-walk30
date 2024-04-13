import React from 'react';

import { ScrollView } from 'react-native';

import AnnouncementCard from './AnnouncementCard'
import { AnnouncementData } from "../../types/AnnouncementData";

const AnnouncementList = (props: { announcementList: AnnouncementData[], navigator: any , nameToId: Map<string, string>}) => {
    return (
        <ScrollView>
            {props.announcementList.map(announcement => {
                return <AnnouncementCard announcementData={announcement} org_name={props.nameToId.get(announcement._id)} key={announcement._id} onPress={() => {
                    props.navigator.navigation.navigate("Announcement", announcement)}}/>
            })}
        </ScrollView>
    )
}

export default AnnouncementList;
