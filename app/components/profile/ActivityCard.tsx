import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { BarChart } from "react-native-gifted-charts";

type Route = {
    key: string;
    title: string;
};
  
type State = NavigationState<Route>;

//Hard coded values for now...will replace with fetched data later
const data=[ {value:380, label: "Mon"}, {value:150, label: "Tue"}, {value:300, label: "Wed"}, {value:50, label: "Thu"}, {value:360, label: "Fri"}, {value:370, label: "Sat"}, {value:230, label: "Sun"} ]

const StepsRoute = () => (
    <View style={styles.chart}>
        <BarChart data = {data} 
        backgroundColor={"white"} 
        height = {162} 
        noOfSections={2} 
        barWidth={22} 
        barBorderRadius={4} 
        frontColor={"#00426D"}
        xAxisThickness={25}
        xAxisColor={'white'}
        yAxisColor={'white'}
        />
    </View>
);
  
const DistanceRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'red'}} />
);

const TimeRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'blue' }} />
);

const renderScene = SceneMap({
    steps: StepsRoute,
    distance: DistanceRoute,
    time: TimeRoute
});

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
        height: 300,
        margin: 10,
    },
    TabBar: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    chart: {
        flex: 1, 
        backgroundColor: "white",
        marginTop:40
    },
    tabElement: {
        backgroundColor: '#00426D',
    }, 
    title: {
        fontWeight: "600",
    },
})