import { ScrollView } from 'react-native';

import ResourceCard from './ResourceCard'
import { ResourceData } from "../../types/ResourceData";
import React from 'react';

const ResourceList = (props: { resourceList: ResourceData[] }) => {
    return (
        <ScrollView>
            {props.resourceList.map(resource => {
                return <ResourceCard resourceData={resource} key={resource.title} />
            })}
        </ScrollView>
    )
}

export default ResourceList;
