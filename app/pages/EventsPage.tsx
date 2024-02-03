import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { EventData } from '../types/EventData';
import EventList from '../components/event/EventList';

const SearchBar = (props: { value: string, onChangeText: (text: string) => void }) => {
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
  
const events = [
{
    id: '1',
    title: 'Rice 10 Mile & 5K',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    date: '10/23',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png', // Replace with actual image URL
},
{
    id: '2',
    title: 'Montrose Halloween Run',
    startTime: '9:00 AM',
    endTime: '11:30 AM',
    date: '10/28',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png', // Replace with actual image URL
},
{
    id: '3',
    title: 'Houston Turkey Trot',
    startTime: '8:00 AM',
    endTime: '10:00 AM',
    date: '11/25',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png', // Replace with actual image URL
},
{
    id: '4',
    title: 'Camp Kesem 5K',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
    date: '12/1',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png', // Replace with actual image URL
},
{
    id: '5',
    title: 'South College Bike Ride',
    startTime: '8:00 AM',
    endTime: '9:30 AM',
    date: '12/5',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png', // Replace with actual image URL
},
// Add more events following the same structure for testing
];

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F6F7FD'
    },
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
        height: 40,
    },
    container: {
      flex: 1,
      backgroundColor: '#F6F7FD',
      padding: 0,
      margin: 0,
    },
    card: {
      backgroundColor: 'white',
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 8,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardImage: {
      width: 75,
      height: 75,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      marginLeft: 10,
      marginVertical: 10,
    },
    cardContent: {
      padding: 16,
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "500",
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align time to left and date to right
        marginTop: 8, // Add space between title and bottom row if needed
        alignItems: 'center',
    },
    cardTime: {
        fontSize: 16,
        color: 'grey', // Adjust as needed
      },
      cardDate: {
        fontSize: 16,
        color: 'grey', // Adjust as needed
      },
    // Add other styles as needed
  });
  
export default function EventsPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [eventData, setEventData] = useState<EventData[]>([]);
    const [filteredEvents, setFilteredEvents] = useState(eventData);

    const EVENTS_ROUTE = "http://localhost:3000/api/event/recent";

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(EVENTS_ROUTE);
                const result = await response.json();
                setEventData(result);
                setFilteredEvents(result);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEventData();
    }, []);

    const onChangeSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredEvents(eventData);
        } else {
            const lowercasedQuery = query.toLowerCase();
            const filteredData = eventData.filter((event: EventData) =>
                event.title.toLowerCase().includes(lowercasedQuery) ||
                event.date.toString().includes(query)
            );
            setFilteredEvents(filteredData);
        }
    };
      
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#00426D'}}>
        <View style={{ flex: 1, backgroundColor:'#00426D', marginBottom: 30}}>
            <SearchBar value={searchQuery} onChangeText={onChangeSearch} />
            <View style={styles.container}>
              <EventList eventList={filteredEvents} />
            </View>
        </View>
      </SafeAreaView>
    );
  }
  