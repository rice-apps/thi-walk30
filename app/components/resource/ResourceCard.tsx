import { Card } from 'react-native-paper'
import { Image, Linking, StyleSheet } from 'react-native';
import { ResourceData } from "../../types/ResourceData";

// dummy resources for testing
let resource1: ResourceData = {
    title: "Resource #1",
    link: new URL('https://www.linkedin.com'),
    featureImage: new URL('https://picsum.photos/id/82/3888/2592'),
    organization: {
        organizationId: 3,
        name: 'LinkedIn',
        image: new URL('https://picsum.photos/id/88/3888/2592'),
    }
}

let resource2: ResourceData = {
    title: "Resource #2",
    link: new URL('https://www.instagram.com'),
    featureImage: new URL('https://picsum.photos/id/85/3888/2592'),
    organization: {
        organizationId: 3,
        name: 'Instagram',
        image: new URL('https://picsum.photos/id/89/3888/2592'),
    }
}

const ResourceCard = (props: { resourceData: ResourceData }) => {
    const styles = StyleSheet.create({
        orgIcon: {
            width: 40,
            height: 40,
            borderRadius: 50,
        },

        cardText: {
            alignItems: 'center',
        }
    });

    return (
        <Card style={{ margin: 15 }} onPress={() => { Linking.openURL(props.resourceData.link.toString()) }}>
            <Card.Cover source={{ uri: props.resourceData.featureImage.toString() }} />
            <Card.Title style={{ marginTop: 15 }} titleVariant='headlineSmall' title={props.resourceData.title} />
            <Card.Title
                titleVariant='titleMedium'
                title={props.resourceData.organization.name}
                left={() => <Image source={{ uri: props.resourceData.organization.image.toString() }} style={styles.orgIcon} />}
            />
        </Card>
    )
}

export default ResourceCard;