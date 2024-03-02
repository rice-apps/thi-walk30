import React, { useState } from "react";
import {
  Linking,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import { AnnouncementData } from "../types/AnnouncementData";

export function AnnouncementPage(props: {
  navigator: any;
  announcement?: AnnouncementData;
}) {
  let announcement = props.navigator.route.params;

  const [orgName, setOrgName] = useState(announcement.organization.name);

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
  });

  props.navigator.navigation.setOptions({ title: "" });

  return (
    <ScrollView style={{ backgroundColor: "#f8f4fc" }}>
      {/* Event image */}
      <Image
        style={{ width: "100%", height: 250 }}
        source={{
          uri: announcement.featuredImage,
        }}
      />
      {/* Host and title */}
      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: "#00426e",
            marginBottom: 10,
            width: "100%",
          }}
          numberOfLines={1}
        >
          {orgName}
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            color: "#00426e",
            marginBottom: 10,
          }}
        >
          {announcement.title}
        </Text>

        {announcement.links.map((link: URL) => {
          return (
            <View style={styles.iconTextPair}>
              <Icon name="link" size={20} color="#407ccc"></Icon>
              <TouchableHighlight
                onPress={() => Linking.openURL(link.toString())}
              >
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    color: "#407ccc",
                    width: 300,
                  }}
                  numberOfLines={1}
                >
                  {link.toString()}
                </Text>
              </TouchableHighlight>
            </View>
          );
        })}

        <Text style={{ marginTop: 10, fontSize: 17 }}>
          {announcement.description}
        </Text>
      </View>
    </ScrollView>
  );
}
