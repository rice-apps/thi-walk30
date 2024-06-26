import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';

const SearchBar = ({ value, onChangeText }) => {
    return (
      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/searchicon.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={value}
          placeholder="Search for events"
        />
      </View>
    );
};


const EventCard = (props: { title: string, startTime: string, endTime: string, date: string, imageUri: string }) => (
    <View>
    <Card style={[styles.card, styles.shadowProp]}>
      <Image source={{ uri: props.imageUri }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardTime}>{props.startTime} - {props.endTime}</Text>
        <Text style={styles.cardDate}>{props.date}</Text>
      </View>
    </Card>
    </View>
  );
  
  
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
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
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
  
export function EventList() {

    const [searchQuery, setSearchQuery] = useState('');
    const [eventData, setEventData] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState(eventData);

    const EVENTS_ROUTE = "http://localhost:3000/api/event/events";

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(EVENTS_ROUTE);
                const result = await response.json();
                setEventData(result);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEventData();
    }, []);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredEvents(eventData);
        } else {
            const lowercasedQuery = query.toLowerCase();
            const filteredData = eventData.filter((event) =>
                event.title.toLowerCase().includes(lowercasedQuery) ||
                event.date.includes(query)
            );
            setFilteredEvents(filteredData);
        }
    };
      
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#00426D'}}>
        <View style={{ flex: 1, backgroundColor:'#00426D', marginBottom: 30}}>
            <SearchBar value={searchQuery} onChangeText={onChangeSearch} />
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            {filteredEvents.map((event) => (
                <EventCard
                key={event.id}
                title={event.title}
                startTime={event.startTime}
                endTime={event.endTime}
                date={event.date}
                imageUri={event.imageUri}
                />
            ))}
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  