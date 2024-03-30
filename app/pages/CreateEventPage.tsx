import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import UploadImageButton from '../components/create_event/UploadImageButton'

export function CreateEventPage() {
  const [eventTitle, setEventTitle] = useState("");
  const [URLAddress, setURLAddress] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleButtonClick = () => {
  };

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
        alignItems: "center"
    },
    createButton: {
        borderWidth: 1,
        borderRadius: 70,
        width: 150,
        padding: 10,
    }
  });

  return (
    <ScrollView style={{backgroundColor: '#f5f7fd'}}>
        <View style={{ margin: 25 }}>
            {/* Upload event image */}
            <UploadImageButton/>
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
            
            {/* Event description input */}
            <View style={styles.block}>
                <Text style={styles.titleText}>Event description</Text>
                <TextInput
                    style={{borderWidth: 1, borderRadius: 5, padding: 10, height: 150}}
                    multiline
                    numberOfLines={5}
                    onChangeText={setEventDescription}
                    value={eventDescription}
                    placeholder="Write a description for your event"
                    placeholderTextColor="#00426e"
                />
            </View>

            {/* Create event button */}
            <View style={styles.buttonView}>
                <Pressable onPress={handleButtonClick} style={styles.createButton}>
                    <Text
                        style={{
                        fontSize: 18,
                        textAlign: "center",
                        }}
                    >
                        Create Event
                    </Text>
                </Pressable>
          </View>
        </View>
      
    </ScrollView>
  );
}
