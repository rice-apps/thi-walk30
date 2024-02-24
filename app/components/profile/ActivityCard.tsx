import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { Text } from 'react-native-paper';
import { TabView, SceneMap, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { BarChart, barDataItem } from "react-native-gifted-charts";
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Route = {
    key: string;
    title: string;
};

type State = NavigationState<Route>;


type DateRange = WeeklyDateRange | MonthlyDateRange;

type WeeklyDateRange = {
    type: "Weekly",
    start_date: Date,
    end_date: Date
}

type MonthlyDateRange = {
    type: "Monthly",
    start_date: Date
}

/*
 Hardcoded Dummy Data, will be replaced by API calls
*/
const daily_avg = 130;
const Total = 1400;
const steps_dta = [{ value: 380, label: "Tue" }, { value: 150, label: "Tue" }, { value: 300, label: "Wed" }, { value: 50, label: "Thu" }, { value: 360, label: "Fri" }, { value: 370, label: "Sat" }, { value: 230, label: "Sun" }]
const other_steps_dta = [{ value: 230, label: "Tue" }, { value: 200, label: "Tue" }, { value: 470, label: "Wed" }, { value: 100, label: "Thu" }, { value: 30, label: "Fri" }, { value: 340, label: "Sat" }, { value: 500, label: "Sun" }]
const weeks_data = [{ value: 3000, label: "Week 1" }, { value: 2500, label: "Week 2" }, { value: 2750, label: "Week 3" }, { value: 1000, label: "Week 4" }]
let should_change = false
let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
/**
 * Generates random data for step data
 */
function generateRandomData() {
    for (let i = 0; i < 7; i++) {
        steps_dta[i].value = Math.floor(Math.random() * 350)+50;
    }
}

/**
 * Returns the data for each of the three segments of data (Steps, Distance, Time) that we collect
 */
function getData(currentDateRange: DateRange): Map<string, barDataItem[][]> {
    let activity_to_data = new Map<string, barDataItem[][]>(
        [
            ["steps", [steps_dta, weeks_data]],
            ["distance", [steps_dta, weeks_data]],
            ["time", [steps_dta, weeks_data]],
        ]
    );

    // trying to introduce some random behavior
    if (should_change) {
        activity_to_data = new Map<string, barDataItem[][]>(
            [
                ["steps", [other_steps_dta, weeks_data]],
                ["distance", [other_steps_dta, weeks_data]],
                ["time", [other_steps_dta, weeks_data]],
            ]
        )
    }

    //Updating steps dta days
    let start_day = currentDateRange.start_date.getDay();
    for (let i = 0; i < 7; i++) {
        steps_dta[i].label = daysOfWeek[start_day];
        start_day = (start_day + 1) % 7;
    }

    
    generateRandomData();


    return activity_to_data;
}

/**
 * Initializes our DateRange as a one week interval ending on the current day
 * @returns 
 */
function initDateRange(): DateRange {
    return initWeeklyDateRange();
}

/**
 * Initializes our DateRange as a one week interval ending on the current day
 * @returns 
 */
function initWeeklyDateRange(): WeeklyDateRange  {
    let start_date: Date = new Date()
    let end_date = new Date();
    start_date.setDate(end_date.getDate() - 7);
    return {
        type: "Weekly",
        start_date,
        end_date
    }
}

function initMonthlyDateRange(): MonthlyDateRange  {
    let start_date: Date = new Date()
    return {
        type: "Monthly",
        start_date,
    }
}

/**
 * Callback function that gets called whenever a user queries a different date range
 * @param currentDate - currentDateRange object being used on the screen
 * @param back true if the user wants to go back one week, false otherwise
 * @returns 
 */
function updateDateRange(currentDate: DateRange, back: boolean): DateRange {
    let start_date = new Date();
    let end_date = new Date();
    //using milliseconds as JS dates use milliseconds under the hood and thus ensures we don't run into any timezone/date issues with other methods of updating dates
    let one_week_in_milli_sec = back ? (-1.0 * 604800000) : (604800000);
    start_date.setTime(currentDate.start_date.getTime() + one_week_in_milli_sec);
    end_date.setTime(currentDate.end_date.getTime() + one_week_in_milli_sec);

    return {
        type: "Weekly",
        start_date,
        end_date
    }
}

/**
 * Extracts the date and month from a Date String (i.e. 12/31/2024 -> 12/31)
 * @param date_str - the date string to extract from
 * @returns 
 */
function extractDayAndMonth(date_str: Date) {
    return date_str.toLocaleDateString().substring(0, date_str.toLocaleDateString().lastIndexOf("/"))
}

/**
 * Creates components for each of the tabs 
 * @param type - can either be steps, distance, or time. This is used to indicate which data to use when generating the charts
 * @returns The component that is displayed within one of the tabs
 */
function makeRoute(type: string) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Weekly");
    const [items, setItems] = useState([
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' }
    ]);

    let current_date_range: DateRange = initDateRange();
    let activity_to_data = getData(current_date_range);
    if (activity_to_data === undefined) {
        return <View>No Data</View>
    }
    let data_list: barDataItem[][] = activity_to_data.get(type)!;
    if (data_list === undefined) {
        return (<View>Could not Load Data!</View>);
    }
    let data: barDataItem[] = [];
    const [dates, setDates] = useState<DateRange>(current_date_range);

    let bar_width: number = 0;

    //TODO abstractify all of the setup into one function 
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
            <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: "center", alignContent: "center", margin: 20, paddingTop: 10, zIndex: 9999 }}>
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
                <Text style={{ marginRight: 30, marginLeft: 30 }}>
                    <Text variant="bodySmall">Daily Avg. </Text>
                    <Text style={{ fontWeight: "bold", marginRight: 40 }} variant="bodyLarge">{daily_avg}</Text>
                </Text>
                <Text>
                    <Text variant="bodySmall">Total </Text>
                    <Text style={{ fontWeight: "bold" }} variant="bodyLarge">{Total}</Text>
                </Text>
            </View>
            {/* Second Row with interactive dates */}
            <View style={{ margin: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <MaterialIcons 
                        name="navigate-before" 
                        size={30} 
                        onPress={() => {
                            let new_range = updateDateRange(dates, true);
                            setDates(new_range);
                        }}
                    />
                    {/* make it so that the dates are centered and it is fixed with  */}
                    <View style = {{ width: '50%' , justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                    <Text style={{ fontWeight: "bold", fontSize: 25}}>{extractDayAndMonth(dates.start_date)}</Text>
                    <FontAwesome 
                        name="minus" 
                        size={10} 
                        style={{ marginHorizontal: 10, transform: [{ scaleY: 1.25 }] }} 
                    />
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>{extractDayAndMonth(dates.end_date)}</Text>
                    </View>
                    <MaterialIcons 
                        name="navigate-next" 
                        size={30} 
                        onPress={() => {
                            let new_range = updateDateRange(dates, false);
                            setDates(new_range);
                        }}
                    />
                </View>
            </View>
            {/* Third Row with BarChart */}
            <View style={{ marginTop: 20 }}>
                <BarChart
                    data={data}
                    backgroundColor={"white"}
                    height={162}
                    noOfSections={2}
                    barWidth={bar_width}
                    barBorderRadius={4}
                    frontColor={"#00426D"}
                    xAxisThickness={25}
                    xAxisColor={'white'}
                    yAxisColor={'white'}
                    formatYLabel={(value) => {
                        if (value == "0"){
                            return ""
                        }
                        return value
                    }}
                />
            </View>
        </View>
    )
};

/**
 * Functions to create each of the Tabs. The TabView documentation indicated that using arrow functions results in 
 * undefined behavior, so this is the workaround. 
 * @returns 
 */
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
        { key: 'time', title: 'Time' }
    ])

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
        height: 0,
        paddingHorizontal: 10,
        minHeight: 30,
        zIndex: 1000,
        borderWidth: 0
    },
    selectRow: {

    },
    basicStats: {

    }

})