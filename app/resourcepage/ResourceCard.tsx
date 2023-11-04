import { Card } from 'react-native-paper'
import { Image, StyleSheet } from 'react-native';
import { ResourceData } from "../types/ResourceData";

const ResourceCard = (props: {resourceData: ResourceData}) => {
    const cardDetailstyles = StyleSheet.create({
        ResourceCard: {
            width: "100%",
            flexWrap: 'wrap',
            flexDirection: 'row',
            padding: "4%",
        },

        eventTitle: {
            width: "75%",
        },

        eventDate: {
            width: "25%"
        },

        eventLocation: {
            width: "58%"
        },

        eventTime: {
            width: "42%"
        }
    });

    return (
        <Card style={{margin: 15}}>
            <Card.Cover source={{ uri: props.resourceData.featureImage.toString()}}/>
            <Card.Title title={props.resourceData.title}/>
            <Card.Title
                title={props.resourceData.organization.name}
                left={() => <Image source={{uri: props.resourceData.organization.image.toString()}} style={{width: 40, height: 40}}/> }
            />
        </Card>
    )
}


export default ResourceCard;