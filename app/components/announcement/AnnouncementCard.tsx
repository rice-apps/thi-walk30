import { Card, Text } from 'react-native-paper'
import { StyleSheet, Image } from 'react-native';
import { AnnouncementData } from "../../types/AnnouncementData";
import React from 'react'; 
import { View } from 'react-native';

const AnnouncementCard = (props: { announcementData: AnnouncementData, onPress: () => void }) => {
    const styles = StyleSheet.create({
        announcementCard: {
            display: "flex",
            width: "80%",
            flexDirection: 'row',
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 5,
        },

        image: {
            width: "20%",
            height: 0,
            paddingTop: "20%",
            borderRadius: 5
        },

        orgName: {
            fontSize: 18,
            fontWeight: "800",
        },

        title: {
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 20,
        },

        description: {
            fontSize: 15,
            fontWeight: "500"
        }
    });

    return (
        <Card
            style={{
                marginBottom: 20,
                backgroundColor: 'white',
                borderRadius: 5,
            }}
            onPress={props.onPress}>
            <Card.Content style={styles.announcementCard}>
                <Image 
                    style={styles.image} 
                    source={{ uri: props.announcementData.featuredImage }}
                />
                <View>
                    <Text style={styles.orgName} numberOfLines={1}>
                        {props.announcementData.organization.name}
                    </Text>
                    <Text style={styles.title} numberOfLines={1}>{props.announcementData.title}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.announcementData.description}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

export default AnnouncementCard;