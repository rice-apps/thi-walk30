import React, { useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';
import { BarChart, barDataItem } from "react-native-gifted-charts";
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type props = {
    type: string,
    ID: string
}

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

type WeeklyData = {
    weekly_steps_data: barDataItem[],
    weekly_distance_data: barDataItem[],
    weekly_time_data: barDataItem[]
}

type MonthlyData = {
    monthly_steps_data: barDataItem[],
    monthly_distance_data: barDataItem[],
    monthly_time_data: barDataItem[]
}

/**
 * Route to fetch data from. Update this with DB call once we move away from local host
 */
const route_ID = "http://localhost:3000/api/daily-activity";

function getDayOfWeek(date_str: string | Date): string {
    let date = new Date(date_str);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
}
/**
 * Fetches weekly data for a given type where type is either "steps", "distance", or "time"
 * @param type - string
 */
async function getWeeklyData(ID: string, dates: WeeklyDateRange): Promise<WeeklyData> {
    const start: string = dates.start_date.toISOString();
    const end: string =  dates.end_date.toISOString();
    const route: string = `${route_ID}/in-range/${ID}?start=${start}&end=${end}`;

    let ret_data = {
        weekly_steps_data: [] as barDataItem[],
        weekly_distance_data: [] as barDataItem[],
        weekly_time_data: [] as barDataItem[]
    }

    //Initialize the data to be 0 for each day of the week
    let current_date = new Date(dates.start_date);
    for (let i = 0; i < 7; i++) {
        ret_data.weekly_steps_data.push({ value: 0, label: getDayOfWeek(current_date) });
        ret_data.weekly_distance_data.push({ value: 0, label: getDayOfWeek(current_date) });
        ret_data.weekly_time_data.push({ value: 0, label: getDayOfWeek(current_date)});
        //Increment the date by one day
        current_date.setDate(current_date.getDate() + 1);
    }

    const response = await fetch(route);

    if (!response.ok) {
        console.log("Error fetching Weekly data");
        return ret_data;
    }

    const data = await response.json();

    //Update ret_data with the data from the API call
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < data.length; i++) {
        let daily_acitivity = await fetch(`${route_ID}/${data[i]}`)
        if (daily_acitivity.ok) {
            let daily_data = await daily_acitivity.json();
            let day = getDayOfWeek(daily_data.date)
            //Change this to update ret_data by adding the data to the correct day
            ret_data.weekly_steps_data[days.indexOf(day)].value = daily_data.steps;
            ret_data.weekly_distance_data[days.indexOf(day)].value = daily_data.miles;
            ret_data.weekly_time_data[days.indexOf(day)].value = daily_data.minutes;
        } else {
            console.log(`Error fetching Daily Activity data for ${data[i]}`);
        }
    }  

    return ret_data;
}

/**
 * Fetches Monthly data for a given type where type is either "steps", "distance", or "time"
 * @param type - string
 */
async function getMonthlyData(ID: string, dates: MonthlyDateRange): Promise<MonthlyData> {
    //Create two dates that represent the start and end of the month based on the start_date of dates
    const start = new Date(dates.start_date);
    start.setDate(1);
    const end = new Date(dates.start_date);
    end.setMonth(end.getMonth() + 1);
    end.setDate(0);

    const route: string = `${route_ID}/in-range/${ID}?start=${start.toISOString()}&end=${end.toISOString()}`;

    let ret_data = {
        monthly_steps_data: [] as barDataItem[],
        monthly_distance_data: [] as barDataItem[],
        monthly_time_data: [] as barDataItem[]
    }

    //Initialize the data to be 0 for each week for 5 weeks
    let current_date = new Date(start);
    while (current_date.getMonth() === start.getMonth()) {
        ret_data.monthly_steps_data.push({ value: 0, label: "Week " + (ret_data.monthly_steps_data.length + 1) });
        ret_data.monthly_distance_data.push({ value: 0, label: "Week " + (ret_data.monthly_distance_data.length + 1) });
        ret_data.monthly_time_data.push({ value: 0, label: "Week " + (ret_data.monthly_time_data.length + 1) });
        //Increment the date by one week
        current_date.setDate(current_date.getDate() + 7);
    }

    const response = await fetch(route);

    if (!response.ok) {
        console.log("Error fetching Weekly data");
        return ret_data;
    }

    const data = await response.json();

    current_date = new Date(start);

    for (let i = 0; i < data.length; i++) {
        let daily_acitivity = await fetch(`${route_ID}/${data[i]}`)
        if (daily_acitivity.ok) {
            let daily_data = await daily_acitivity.json();
            let date = new Date(daily_data.date);
            let week = Math.floor((date.getDate() - 1) / 7);
            //Change this to update ret_data by adding the data to the correct week
            ret_data.monthly_steps_data[week].value += daily_data.steps;
            ret_data.monthly_distance_data[week].value += daily_data.miles;
            ret_data.monthly_time_data[week].value += daily_data.minutes;
        } else {
            console.log(`Error fetching Daily Activity data for ${data[i]}`);
        }
    }

    return ret_data;
}
/**
 * Initializes our DateRange as a one week interval ending on the current day
 * @returns 
 */
function initDateRange(): DateRange[] {
    return [initWeeklyDateRange(), initMonthlyDateRange()];
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
    if (currentDate.type === "Weekly") {
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
    } else {
        let start_date = new Date();
        if (back) {
            start_date.setMonth(currentDate.start_date.getMonth() - 1);
        } else {
            start_date.setMonth(currentDate.start_date.getMonth() + 1);
        }
        return {
            type: "Monthly",
            start_date
        }
    
    }
}

/**
 * Helper functions to create scrollable date selectors based on the currently selected dates
 * @param date 
 * @returns 
 */
function makeWeeklySelector(date: WeeklyDateRange) {
    {/* make it so that the dates are centered and it is fixed with  */}
    return (
        <View style = {{ width: '50%' , justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Text style={{ fontWeight: "bold", fontSize: 25}}>{extractDayAndMonth(date.start_date)}</Text>
                <FontAwesome 
                    name="minus" 
                        size={10} 
                        style={{ marginHorizontal: 10, transform: [{ scaleY: 1.25 }] }} 
                    />
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>{extractDayAndMonth(date.end_date)}</Text>
         </View>
    )
}

function makeMonthlySelector(date: MonthlyDateRange) {
    return (
        <View style = {{ width: '50%' , justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{date.start_date.toLocaleString("en-US", { month: "long", year: "numeric" })}</Text>
        </View>
    )
}

/**
 * Creates the interactive row that users can use to select which dates they want to use for their charts
 * @param rangeType - either "Weekly" or "Monthly"
 * @param dates - the current date range being used
 * @param setDates - callback function to update the date range
 * @returns 
 */
function makeDateRow(rangeType: string, dates: DateRange[], setDates: Function) {
    return (
            <View style={{ margin: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <MaterialIcons 
                        name="navigate-before" 
                        size={30} 
                        onPress={() => {
                            if (rangeType === "Weekly") {
                                let new_range = updateDateRange(dates[0], true);
                                setDates([new_range, dates[1]]);
                            } else {
                                let new_range = updateDateRange(dates[1], true);
                                setDates([dates[0], new_range]);
                            };
                        }}
                    />
                    {/* make it so that the dates are centered and it is fixed with  */}
                    {rangeType === "Weekly" ? makeWeeklySelector(dates[0] as WeeklyDateRange) : makeMonthlySelector(dates[1] as MonthlyDateRange)}
                    <MaterialIcons 
                        name="navigate-next" 
                        size={30} 
                        onPress={() => {
                            if (rangeType === "Weekly") {
                                let new_range = updateDateRange(dates[0], false);
                                setDates([new_range, dates[1]]);
                            } else {
                                let new_range = updateDateRange(dates[1], false);
                                setDates([dates[0], new_range]);
                            }
                        }}
                    />
                </View>
            </View>
    )
}

/**
 * Helper functions for computing the average and total of the data. Returns 0 if the data is empty as the data may sometimes be undefined while waiting on the API call
 * @param data 
 * @returns 
 */
function computeDailyAvg(data: barDataItem[]): number {
    if (data.length === 0) {
        return 0;
    }
    return Math.floor(computeTotal(data) / data.length);
}

function computeTotal(data: barDataItem[]): number {
    let sum = 0;
    if (data.length === 0) {
        return sum;
    }
    for (let i = 0; i < data.length; i++) {
        sum += data[i].value;
    }
    return sum;
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
export default function ActivityCardChart(props: props) {
    const [open, setOpen] = useState(false);
    //Starts off with weekly data
    const [value, setValue] = useState("Weekly");
    //Set to false when before first API call, set to true after first API call. This is used so we know when to only query either Weekly or Monthly data
    const [hasLoaded, setHasLoaded] = useState(false);
    const [items, setItems] = useState([
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' }
    ]);
    let current_date_range: DateRange[] = initDateRange();
    const [dates, setDates] = useState<DateRange[]>(current_date_range);
    const [weeklyData, setWeeklyData] = useState<WeeklyData>({
        weekly_steps_data: [],
        weekly_distance_data: [],
        weekly_time_data: []
    });
    const [monthlyData, setMonthlyData] = useState<MonthlyData>({
        monthly_steps_data: [],
        monthly_distance_data: [],
        monthly_time_data: []
    });


    let data: barDataItem[] = [];
    let bar_width: number = 0;
    
    // Make call to db
    useEffect(() => {
        const fetchData = async () => {
            if (!hasLoaded) {
                const weeklyDataResult = await getWeeklyData(props.ID, dates[0] as WeeklyDateRange);
                const monthlyDataResult = await getMonthlyData(props.ID, dates[1] as MonthlyDateRange);
                setWeeklyData(weeklyDataResult);
                setMonthlyData(monthlyDataResult);
                setHasLoaded(true);
            } else {
                if (value === "Weekly") {
                    const weeklyDataResult = await getWeeklyData(props.ID, dates[0] as WeeklyDateRange);
                    setWeeklyData(weeklyDataResult);
                } else {
                    const monthlyDataResult = await getMonthlyData(props.ID, dates[1] as MonthlyDateRange);
                    setMonthlyData(monthlyDataResult);
                }
            }
        };
    
        fetchData();
    }, [props.ID, dates]);

    let weekly_data = [weeklyData.weekly_steps_data, weeklyData.weekly_distance_data, weeklyData.weekly_time_data][["steps", "distance", "time"].indexOf(props.type)];
    let monthly_data = [monthlyData.monthly_steps_data, monthlyData.monthly_distance_data, monthlyData.monthly_time_data][["steps", "distance", "time"].indexOf(props.type)];

    switch (value) {
        case 'Weekly':
            data = weekly_data
            bar_width = 22;
            break;
        case "Monthly":
            data = monthly_data;
            bar_width = 40;
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
                    <Text variant="bodySmall">Average:  </Text>
                    <Text style={{ fontWeight: "bold", marginRight: 40 }} variant="bodyLarge">{value == "Weekly" ? computeDailyAvg(weekly_data) : computeDailyAvg(monthly_data)}</Text>
                </Text>
                <Text>
                    <Text variant="bodySmall">Total </Text>
                    <Text style={{ fontWeight: "bold" }} variant="bodyLarge">{value == "Weekly" ? computeTotal(weekly_data) : computeTotal(monthly_data)}</Text>
                </Text>
            </View>
            {/* Second Row with interactive dates */}
            {makeDateRow(value, dates, setDates)}
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


const styles = StyleSheet.create({
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
    }
})