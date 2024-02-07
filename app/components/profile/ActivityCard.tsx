import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard} from 'react-native';
import { Text } from 'react-native-paper';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { BarChart, barDataItem } from "react-native-gifted-charts";
import DropDownPicker from 'react-native-dropdown-picker';

type Route = {
    key: string;
    title: string;
};
  
type State = NavigationState<Route>;

const daily_avg = 130;
const Total = 1400;
const steps_dta =[ {value:380, label: "Mon"}, {value:150, label: "Tue"}, {value:300, label: "Wed"}, {value:50, label: "Thu"}, {value:360, label: "Fri"}, {value:370, label: "Sat"}, {value:230, label: "Sun"} ]
const weeks_data =[ {value:3000, label: "Week 1"}, {value:2500, label: "Week 2"}, {value:2750, label: "Week 3"}, {value:1000, label: "Week 4"} ]
//Hard coded values for now...will replace with fetched data later
let activity_to_data = new Map<string, barDataItem[][]>(
    [
        ["steps", [steps_dta, weeks_data]],
        ["distance", [steps_dta, weeks_data]],
        ["time", [steps_dta, weeks_data]],
    ]
);

function makeRoute(type: string) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Weekly");
    const [items, setItems] = useState([
      {label: 'Weekly', value: 'Weekly'},
      {label: 'Monthly', value: 'Monthly'}
    ]);
    let data_list: barDataItem[][] = activity_to_data.get(type)!;
    let data: barDataItem[] = [];
    if (data_list === undefined) {
        return (<View>Could not Load Data!</View>);
    }
    let bar_width: number = 0;
    switch (value) {
        case 'Weekly':
            data = data_list[0];
            bar_width = 22;
            break;
        case "Monthly":
            data = data_list[1];
            bar_width = 50;
            break;
    }
    return (
        <View>
            {/* First Row with BarChart */}
            <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: "center", alignContent: "center", marginBottom: 20, paddingTop: 10, zIndex: 9999}}>
                <DropDownPicker
                        style={styles.dropDown}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listMode="SCROLLVIEW"
                        containerStyle={{
                            width: "33%",
                            alignContent: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                        }}
                    />
                    <Text style = {{marginRight: 30, marginLeft: 30}}>
                        <Text variant="bodySmall">Daily Avg. </Text>
                        <Text style = {{fontWeight: "bold", marginRight: 40}} variant="bodyLarge">{daily_avg}</Text>
                    </Text>
                    <Text>
                        <Text variant="bodySmall">Total </Text>
                        <Text style = {{fontWeight: "bold"}}variant="bodyLarge">{Total}</Text>
                    </Text>
            </View>
            {/* Second Row with BarChart */}
            <View style = {{marginTop: 20}}>
                <BarChart 
                    data = {data} 
                    backgroundColor={"white"} 
                    height = {162} 
                    noOfSections={2} 
                    barWidth={bar_width}
                    barBorderRadius={4} 
                    frontColor={"#00426D"}
                    xAxisThickness={25}
                    xAxisColor={'white'}
                    yAxisColor={'white'}
                    />
                </View>
        </View>
    )
};

function StepsRoute() {
    return makeRoute('steps');
};
  
function DistanceRoute() {
    return makeRoute('distance');
};

function TimeRoute() {
    return makeRoute('time');
};

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
        height: 330,
        margin: 10,
    },
    TabBar: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    chart: {
        backgroundColor: "white",
        marginTop: 55,
    },
    tabElement: {
        backgroundColor: '#00426D',
    }, 
    title: {
        fontWeight: "600",
        marginBottom: 10
    },
    dropDown: {
        borderRadius: 10,
        backgroundColor: "#D8D9DC",
        height:0,
        paddingHorizontal: 10,
        minHeight: 30,
        zIndex: 1000
    },
    selectRow: {

    },
    basicStats: {

    }

})