import React from 'react';
import { Card } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { AnnouncementData } from "../../types/AnnouncementData";

const AnnouncementCard = (props: { announcementData: AnnouncementData }) => {
    const styles = StyleSheet.create({
        announcementCard: {
            display: "flex",
            width: "100%",
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: 'white'
        },

        announcementImage: {
            width: "22%",
            height: 0,
            paddingTop: "22%",
            borderRadius: 5
        },

        announcementDetails: {
            width: "75%",
            gap: 15,
            flexDirection: 'column',
        },

        announcementType: {
            fontSize: 21,
            fontWeight: "500",
        },

        announcementTime: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 50,
        },
    });


    return (
        <Card style={{margin : 10}}>
            <Card.Content style={styles.announcementCard}>
                <Image style={styles.announcementImage} source={{ uri: props.announcementData.author_pfp}}/>
                <View style={styles.announcementDetails}>
                    <Text style={styles.eventTitle} numberOfLines={1} >
                        {props.eventData.title}
                    </Text>
                    <View style={styles.eventDateTime}>
                        <Text style={styles.eventLogistics}>
                            {props.eventData.startTime} - {props.eventData.endTime}
                        </Text>
                        <Text style={styles.eventLogistics}>
                            {props.eventData.date.toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}
                        </Text>
                    </View>
                </View>    
            </Card.Content>
        </Card>
    );
}

export default AnnouncementCard;