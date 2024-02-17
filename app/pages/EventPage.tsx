import React, { useState } from "react";
import {
  Linking,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { EventData } from "../types/EventData";
import Icon from "@expo/vector-icons/Entypo";
import LocationPin from "@expo/vector-icons/MaterialIcons";

export function EventPage(props: { event: EventData }) {
  const [registerText, setRegisterText] = useState("Register");
  const [showRegister, setShowRegister] = useState(false);

  const handleButtonClick = () => {
    setShowRegister(!showRegister);
    if (showRegister) {
      setRegisterText("Register");
    } else {
      setRegisterText("Unregister");
    }
  };

  const onLinkPress = (link: string) => {
    Linking.openURL(link);
  };

  const styles = StyleSheet.create({
    header: {
      color: "#00426e",
      marginBottom: 10,
      marginTop: 10,
      fontSize: 18,
      fontWeight: "600",
    },
    iconTextPair: {
      flexDirection: "row",
      marginBottom: 5,
    },
    iconText: {
      marginLeft: 10,
      fontSize: 15,
      color: "#00426e",
      width: 180,
    },
    registerButton: {
      backgroundColor: "#00426e",
      borderRadius: 5,
      padding: 10,
      height: 45,
      width: 120,
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  });

  return (
    <ScrollView style={{ backgroundColor: "#f8f4fc" }}>
      {/* Event image */}
      <Image
        style={{ width: "100%", height: 250 }}
        source={{
          uri: props.event.featureImage,
        }}
      />
      {/* Title and host */}
      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            color: "#00426e",
            marginBottom: 10,
            width: "100%",
          }}
          numberOfLines={1}
        >
          {props.event.title}
        </Text>
        <Text style={{ fontSize: 15, color: "#407ccc", marginBottom: 15 }}>
          Hosted by{" "}
          <Text style={{ fontWeight: "700" }}>{props.event.host}</Text>
        </Text>

        {/* Logistics box: date, location, link, register button */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.iconTextPair}>
              <Icon name="calendar" size={20} color="#00426e"></Icon>
              <Text style={styles.iconText} numberOfLines={1}>
                {props.event.date.toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </View>

            <View style={styles.iconTextPair}>
              <LocationPin
                name="location-pin"
                size={20}
                color="#00426e"
              ></LocationPin>
              <Text style={styles.iconText} numberOfLines={1}>
                {props.event.location.address}
              </Text>
            </View>

            <View style={styles.iconTextPair}>
              <Icon name="link" size={20} color="#407ccc"></Icon>
              <TouchableHighlight onPress={() => onLinkPress(props.event.link)}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    color: "#407ccc",
                    width: 180,
                  }}
                  numberOfLines={1}
                >
                  {props.event.link}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.registerButton}>
            <Pressable onPress={handleButtonClick}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {registerText}
              </Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.header}>23 participating</Text>
        <Text style={styles.header}>Challenges</Text>
        <Text style={styles.header}>Event Description</Text>
        <Text>{props.event.description}</Text>
      </View>
    </ScrollView>
  );
}