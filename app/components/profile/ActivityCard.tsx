import React from 'react';
import { StyleSheet, View, useWindowDimensions} from 'react-native';
import { Text } from 'react-native-paper';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import ActivityCardChart from './ActivityCardChart';

type Route = {
    key: string;
    title: string;
};

type State = NavigationState<Route>;

type props = {
    ID: string
}

const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={styles.tabElement}
    />
);


export default function ActivityCard(props: props) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'steps', title: 'Steps' },
        { key: 'distance', title: 'Distance' },
        { key: 'time', title: 'Time' }
    ])

    // These are constant as to not unnesscesarily rerender component on state change
    const stepsRoute = () => <ActivityCardChart type = {"steps"} ID = {props.ID}/>
    const distanceRoute = () => <ActivityCardChart type = {"distance"} ID = {props.ID}/>
    const timeRoute = () => <ActivityCardChart type = {"time"} ID = {props.ID}/>

    const renderScene = SceneMap({
        steps: stepsRoute,
        distance: distanceRoute,
        time: timeRoute
    });


    return (
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.title}>My Activity</Text>
            <TabView style={styles.TabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 425,
        margin: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8
    },
    TabBar: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    tabElement: {
        backgroundColor: '#00426D',
    },
    title: {
        fontWeight: "600",
        marginBottom: 10
    }
})