import { ScrollView } from 'react-native';

import ResourceCard from './ResourceCard'
import { ResourceData } from "../../types/ResourceData";
import React from 'react';

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
