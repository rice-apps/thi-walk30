import { Card } from 'react-native-paper'
import { Image, Linking } from 'react-native';
import { ResourceData } from "../../types/ResourceData";
import React from 'react';

// // dummy resources for testing
// let resource1: ResourceData = {
//     title: "Resource #1",
//     link: new URL('https://www.linkedin.com'),
//     featureImage: new URL('https://picsum.photos/id/82/3888/2592'),
//     organization: {
//         organizationId: 3,
//         name: 'LinkedIn',
//         image: new URL('https://picsum.photos/id/88/3888/2592'),
//     }
// }

// let resource2: ResourceData = {
//     title: "Resource #2",
//     link: new URL('https://www.instagram.com'),
//     featureImage: new URL('https://picsum.photos/id/85/3888/2592'),
//     organization: {
//         organizationId: 3,
//         name: 'Instagram',
//         image: new URL('https://picsum.photos/id/89/3888/2592'),
//     }
// }

const ResourceCard = (props: { resourceData: ResourceData }) => {
    return (
        <Card
            style={{
                margin: 15,
                backgroundColor: 'white',
                borderRadius: 5,
            }}
            onPress={() => { Linking.openURL(props.resourceData.link.toString()) }}
        >
            <Card.Content 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    overflow: 'hidden' }}
            >
                <Image 
                    style={{ width: 65, height: 65, borderRadius: 5 }} 
                    source={{ uri: props.resourceData.organization.image.toString() }}
                />
                <Card.Title 
                    style={{ width: 270 }}
                    titleStyle={{ fontWeight: "500"}} 
                    titleVariant='titleLarge' 
                    title={props.resourceData.title} 
                />
            </Card.Content>
        </Card>
    )
}

export default ResourceCard;
