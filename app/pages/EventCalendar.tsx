import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { EventData } from '../types/EventData';

const SearchBar = (props: {
    value: string,
    onChangeText: (text: string) => void
}) => {
    return (
        <View style={styles.searchContainer}>
            <Image
                source={require('../assets/searchicon.png')}
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.searchInput}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder="Search for events"
            />
        </View>
    );
};

function getCurrentDateFormatted(): string {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}


export function EventCalendar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [eventData, setEventData] = useState<EventData[]>([
        //dummy data
        {
            _id: "0",
            organization: "Texas Heart Institute",
            title: "Summer Run",
            description: "Join us for a summer run!",
            img: "",
            link: "https://thi.org",
            date: new Date("2024-1-1 9:00").toString(),
            duration: 60,
            location: {
                latitude: 0,
                longitude: 0,
                address: "Hermann Park"
            }
        },
        // ... more events
    ]);
    const [filteredEvents, setFilteredEvents] = useState(eventData);

    const onChangeSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredEvents(eventData);
        } else {
            const lowercasedQuery = query.toLowerCase();
            const filteredData = eventData.filter((event) =>
                event.title.toLowerCase().includes(lowercasedQuery) ||
                event.date.toString().includes(query)
            );
            setFilteredEvents(filteredData);
        }
    };


    const [activeButton, setActiveButton] = useState('');

    const [selectedDay, setSelectedDay] = useState(() => {
        const today = new Date();
        return today;
    });

    const filterEventsForSelectedDay = (selectedDate: Date) => {
        const filteredData = eventData.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getDay() == selectedDate.getDay() &&
                eventDate.getMonth() == selectedDate.getMonth() &&
                eventDate.getFullYear() == selectedDate.getFullYear();
        });
        setFilteredEvents(filteredData);
    };

    const onDayPress = (day: DateData) => {
        const dayDate = new Date();
        dayDate.setDate(day.day);
        dayDate.setMonth(day.month - 1);
        dayDate.setFullYear(day.year);
        setSelectedDay(dayDate);
        filterEventsForSelectedDay(dayDate);
    };

    useEffect(() => {
        filterEventsForSelectedDay(selectedDay);
    }, []);

    const formatDateDisplay = (date: Date) => {
        // Create a date object using the dateString, setting the time to noon to avoid any issues with daylight saving time changes
        // const date = new Date(dateString + 'T12:00:00'); // This sets the time to noon

        // Format the date
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const renderEventItem = (props: { item: EventData }) => {
        return (
            <View style={styles.eventItemContainer}>
                <Text style={styles.eventTitle}>{props.item.title}</Text>
                <Text style={styles.eventTime}>{new Date(props.item.date).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00426D' }}>
            <View style={{ backgroundColor: '#00426D' }}>
                <View style={{ borderWidth: 0, marginBottom: 10 }}>
                    <SearchBar value={searchQuery} onChangeText={onChangeSearch} />
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center', height: 45, marginBottom: 20 }}>
                    <TouchableHighlight underlayColor="#FFFFFF" style={{ backgroundColor: activeButton == 'Calendar' ? '#C5DFFF' : '#00426D', borderWidth: 2, borderColor: '#C5DFFF', borderRadius: 10, paddingHorizontal: 20, justifyContent: 'center', marginRight: 20 }} onPress={() => setActiveButton('Calendar')}>
                        <Text style={{ color: activeButton == 'Calendar' ? '#000000' : '#C5DFFF' }}>Calendar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#FFFFFF" style={{ backgroundColor: activeButton == 'List' ? '#C5DFFF' : '#00426D', borderWidth: 2, borderColor: '#C5DFFF', borderRadius: 10, paddingHorizontal: 35, justifyContent: 'center' }} onPress={() => setActiveButton('List')}>
                        <Text style={{ color: activeButton == 'List' ? '#000000' : '#C5DFFF' }}>List</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#FFFFFF" style={{ backgroundColor: activeButton == 'Map' ? '#C5DFFF' : '#00426D', borderWidth: 2, borderColor: '#C5DFFF', borderRadius: 10, paddingHorizontal: 35, justifyContent: 'center', marginLeft: 20 }} onPress={() => setActiveButton('Map')}>
                        <Text style={{ color: activeButton == 'Map' ? '#000000' : '#C5DFFF' }}>Map</Text>
                    </TouchableHighlight>
                </View>
                <Calendar
                    // Initial date to set the calendar to a specific month
                    current={getCurrentDateFormatted()}
                    // Handler which gets executed on day press
                    onDayPress={onDayPress}
                    // Customize the appearance of the calendar
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00426D',
                        selectedDayTextColor: '#FFFFFF',
                        todayTextColor: '#000000',
                        todayBackgroundColor: '#C5DFFF',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#00426D',
                        monthTextColor: '#00426D',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    markedDates={{
                        [selectedDay.toISOString().split('T')[0]]: { selected: true, marked: true, selectedColor: '#00426D', textColor: '#ffffff' },
                    }}
                />
                <View style={{ backgroundColor: '#F4F4F4', height: 75, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#00426D', fontWeight: "600", fontSize: 22 }}>{formatDateDisplay(selectedDay)}</Text>
                </View>
                <FlatList
                    data={filteredEvents}
                    renderItem={renderEventItem}
                // ...other props
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    searchIcon: {
        marginRight: 10,
        width: 24,
        height: 24,
    },
    searchInput: {
        flex: 1,
        height: 35,
    },
    eventItemContainer: {
        backgroundColor: '#F4F4F4',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventTitle: {
        fontWeight: 'bold',
    },
    eventTime: {
        color: '#666',
    },
});