import React from 'react';
import { ScrollView } from 'react-native';

import AnnouncementCard from './AnnouncementCard'
import { AnnouncementData } from "../../types/AnnouncementData";

const AnnouncementList = (props: { announcementList: AnnouncementData[] }) => {
    return (
        <ScrollView>
            {props.announcementList.map(announcement => {
                return <AnnouncementCard AnnouncementData={announcement} key={announcement.id}/>
            })}
        </ScrollView>
    )
}

export default AnnouncementList;