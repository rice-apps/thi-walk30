import React from 'react';
import { Card } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { AnnouncementData } from '../../types/AnnouncementData'

const AnnouncementCard = (props: { AnnouncementData: AnnouncementData }) => {

    function calculateDate() {
        const annDate = props.AnnouncementData.date
        const currentDate = new Date()
        
        if (annDate.getUTCDate() === currentDate.getUTCDate() && annDate.getUTCMonth() === currentDate.getUTCMonth() && annDate.getUTCFullYear() === currentDate.getUTCFullYear()) {
            var meridiem = annDate.getUTCHours() >= 12 ? " PM" : " AM"
            var hours = annDate.getUTCHours() == 12 ? 12 : annDate.getUTCHours() % 12
            var minutes = annDate.getUTCMinutes() < 10 ? "0" + annDate.getUTCMinutes() : annDate.getUTCMinutes()
            return hours + ":" + minutes + meridiem
        }
        else if (annDate.getUTCMonth() === currentDate.getUTCMonth() && annDate.getUTCFullYear() === currentDate.getUTCFullYear() && (currentDate.getUTCDate() - annDate.getUTCDate() < 7)) {
            if (currentDate.getUTCDate() - annDate.getUTCDate() == 1) {
                return "Yesterday"
            }
            else {
                return annDate.getUTCDay()
            }
        }
        else {
            return annDate.toLocaleDateString()
        }
    }
    const styles = StyleSheet.create({
        announcementCard: {
            display: "flex",
            width: "100%",
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: 'white'
        },

        authorPicture: {
            width: "18%",
            height: 0,
            paddingTop: "18%",
            borderRadius: 5
        },

        announcementDesc: {
            width: "75%",
            gap: 15,
            flexDirection: 'column',
        },

        announcementType: {
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 5,
            flexDirection: 'column'
        },

        announcementTime: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 50,
            marginBottom:-15,
        },
        announcementLogistics: {
                marginTop: 10,
                marginLeft: -20,
                fontSize: 15,
        },

        announcementAuthor: {
            fontSize: 21,
            fontWeight: "bold",
        

        },
        announcementDescription: {
            marginTop:12,
            fontSize:15,
            marginLeft: 5,
            marginBottom: 12
        }
    });


    return (
      
      
        
        

        <Card style={{margin : 10}}>
            
            <Card.Content style={styles.announcementCard}>
                
                <View style={styles.announcementDesc}>
                
                    <View style={styles.announcementTime}>
                        <Image style={styles.authorPicture} source={{ uri: props.AnnouncementData.authorPicture}}/>
                        <View style={styles.announcementType}>
                            <Text style={styles.announcementType} numberOfLines={2} >
                                {props.AnnouncementData.organization}
                            </Text>
                            <Text style={styles.announcementType} numberOfLines={1} >
                                {props.AnnouncementData.type}   
                            </Text>
                            <Text style={styles.announcementDescription} numberOfLines={3} >
                                {props.AnnouncementData.description}
                            </Text>

                        </View>
                        <Text style={styles.announcementLogistics}>
                                {calculateDate()}
                        </Text> 
                    </View>
                    
                    
                </View>    
            </Card.Content>
        </Card>
    );
}

export default AnnouncementCard;