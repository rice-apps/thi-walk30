import { Card } from 'react-native-paper'
import { Image, Linking } from 'react-native';
import { ResourceData } from "../../types/ResourceData";
import React from 'react'; 

const ResourceCard = (props: { resourceData: ResourceData }) => {
    return (
        <Card
            style={{
                margin: 10,
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
                    style={{ width: '22%', height: 0, paddingTop: '22%', borderRadius: 5 }} 
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
