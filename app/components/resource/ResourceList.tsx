import { ScrollView } from 'react-native';
import React from "react";
import ResourceCard from './ResourceCard'
import { ResourceData } from "../../types/ResourceData";

const ResourceList = (props: { resourceList: ResourceData[] }) => {
    return (
        <ScrollView>
            {props.resourceList.map(event => {
                return <ResourceCard resourceData={event} key={event.title} />
            })}
        </ScrollView>
 )
}

export default ResourceList;
