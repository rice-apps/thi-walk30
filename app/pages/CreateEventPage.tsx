import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import UploadImageButton from "../components/create_event/UploadImageButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export function CreateEventPage() {
  const [eventTitle, setEventTitle] = useState("");
  const [URLAddress, setURLAddress] = useState("");
  const [location, setLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [image, setImage] = useState('');

  const handleDateFromChange = (event: any, date: Date | undefined) => {
    if (date) {
        setFromDate(date);
    }
  };

  const handleDateToChange = (event: any, date: Date | undefined) => {
    if (date) {
        setToDate(date);
    }
  };

  const handleButtonClick = async () => {
    try {
      console.log('here')
      const duration = fromDate.getTime() - toDate.getTime()
      const response = await fetch('http://[Server Host IP]:3000/API/event/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: eventTitle,
          description: eventDescription,
          img: image,
          link: URLAddress,
          location: {
            latitude: 0,
            longitude: 0,
            address: location
          },
          date: fromDate,
          duration: duration,
          organization: '65cfda3383058492e13dba01' //Placeholder value
        }),
      })
      .then(response => response.json())
      .then(response => console.log(response))
    }
    catch (error) {
      console.error('Error: ' + "[" + error + "]")
    };
  }

  const handleImageChanges = async (img: string) => {
    setImage(img)
  }

  const styles = StyleSheet.create({
    titleText: {
      color: "#00426e",
      marginBottom: 10,
      marginTop: 10,
      fontSize: 17,
      fontWeight: "500",
    },
    input: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    block: {
      marginTop: 10,
      marginBottom: 10,
    },
    buttonView: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    createButton: {
      borderWidth: 1,
      borderRadius: 70,
      width: 150,
      padding: 10,
    },
    dateDisplay: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center"
    }
  });

  return (
    <ScrollView style={{ backgroundColor: "#f5f7fd" }}>
      <View style={{ margin: 25 }}>
        <View style={{ marginTop: 50 }}></View>
        {/* Upload event image */}
        <UploadImageButton onChange={handleImageChanges}/>

        {/* Event title input */}
        <View style={styles.block}>
          <Text style={styles.titleText}>Event Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEventTitle}
            value={eventTitle}
            placeholder="Event title"
            placeholderTextColor="#00426e"
          />
        </View>

        {/* Date input */}
        <View style={styles.block}>
          <Text style={styles.titleText}>Date</Text>
          <View style={styles.dateDisplay}>
            <Text style={{color: "#00426e", fontSize: 15}}>From</Text>
            <RNDateTimePicker
                value={fromDate}
                mode="date"
                onChange={handleDateFromChange}
                minimumDate={new Date()}
            />
            <Text style={{color: "#00426e", fontSize: 15, marginLeft: 10}}>to</Text>
            <RNDateTimePicker
                value={toDate}
                mode="date"
                onChange={handleDateToChange}
                minimumDate={fromDate}
            />
          </View>
        </View>

        {/* Location search */}

        {/* Add URL */}
        <View style={styles.block}>
          <Text style={styles.titleText}>Add URL</Text>
          <TextInput
            style={styles.input}
            onChangeText={setURLAddress}
            value={URLAddress}
            placeholder="URL address"
            placeholderTextColor="#00426e"
          />
        </View>

        {/* Add Location */}
        <View style={styles.block}>
          <Text style={styles.titleText}>Location</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLocation}
            value={location}
            placeholder="Search for location"
            placeholderTextColor="#00426e"
          />
        </View>

        {/* Event description input */}
        <View style={styles.block}>
          <Text style={styles.titleText}>Event description</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              height: 150,
            }}
            multiline
            numberOfLines={5}
            onChangeText={setEventDescription}
            value={eventDescription}
            placeholder="Write a description for your event"
            placeholderTextColor="#00426e"
          />
        </View>

        {/* Create event button */}
        <View style={styles.block}>
            <View style={styles.buttonView}>
                <Pressable onPress={handleButtonClick} style={styles.createButton}>
                    <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center",
                        fontWeight: "500",
                    }}
                    >
                    Create Event
                    </Text>
                </Pressable>
            </View>
        </View>

        <View style={{margin: 90}}></View>
      </View>
    </ScrollView>
  );
}
