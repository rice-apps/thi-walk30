import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';

const StepsRoute = () => (
    <View style={styles.chart} />
);
  
const DistanceRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7'}} />
);

const TimeRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#987ab7' }} />
);

  
const renderScene = SceneMap({
    steps: StepsRoute,
    distance: DistanceRoute,
    time: TimeRoute
});

type Route = {
    key: string;
    title: string;
};
  
type State = NavigationState<Route>;

const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={styles.tabElement}
    />
  );

export default function Dashboard() {
    const [dashInfo, setDashInfo] = useState({ Steps: 10, Distance: "10km", Time: "3:00" });
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'steps', title: 'Steps' },
      { key: 'distance', title: 'Distance' },
      { key: 'time', title: 'Time'}
    ])

    return (
        <View style = {styles.container}>
            <Text variant="titleLarge" style = {styles.title}>My Activity</Text>
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
        height: 250,
        margin: 10,
    },
    TabBar: {
        flex: 1,
        borderRadius: 10,
        color: "red",
        backgroundColor: "red",
    },
    chart: {
        flex: 1, 
        backgroundColor: "#00426D"
    },
    tabElement: {
        backgroundColor: '#00426D',
    }, 
    title: {
        fontWeight: "600",
    },
})