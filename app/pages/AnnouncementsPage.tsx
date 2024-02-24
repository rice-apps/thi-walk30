import React, { useEffect, useState } from "react";
import AnnouncementList from "../components/announcement/AnnouncementList";
import { AnnouncementData } from "../types/AnnouncementData";
import { Searchbar } from "react-native-paper";
import { StyleSheet, SafeAreaView, View } from "react-native";

const a1: AnnouncementData = {
  _id: "dlkjdfdfdf",
    organization: {
      _id: "dfldf",
      name: "yay",
      img: new URL("https://wwww.linkedin.com")
    },
    title: "Fake announcement!! Very important",
    description: "Dlfkdjafd;lkfjadl;kfjdf;d fdlkfja df;dlka jd; akldjflkaj ;d aklj ",
    links: [new URL("https://wwww.linkedin.com")],
    featuredImage: "https://picsum.photos/id/82/3888/2592",
}

const a2: AnnouncementData = {
  _id: "dlkjdfkkkkkdfdf",
    organization: {
      _id: "dflkdf",
      name: "Rice University",
      img: new URL("https://wwww.linkedin.com")
    },
    title: "Early registration for 10 Mile is open now!",
    description: `"Turtles all the way down" is an expression of the problem of infinite regress. The saying alludes to the mythological idea of a World Turtle that supports a flat Earth on its back. It suggests that this turtle rests on the back of an even larger turtle, which itself is part of a column of increasingly larger turtles that continues indefinitely.

    The exact origin of the phrase is uncertain. In the form "rocks all the way down", the saying appears as early as 1838.[1] References to the saying's mythological antecedents, the World Turtle and its counterpart the World Elephant, were made by a number of authors in the 17th and 18th centuries.[2][3]
    
    The expression has been used to illustrate problems such as the regress argument in epistemology.`,
    links: [new URL("https://wwww.linkedin.com"), new URL("https://www.rice.edu/majors-minors-and-programs")],
    featuredImage: "https://picsum.photos/id/82/3888/2592",
}

const announcementList: AnnouncementData[] = [a1, a2];

export function AnnouncementsPage(props: { navigator: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState(announcementList);
  const [announcementData, setAnnouncementData] = useState<AnnouncementData[]>(announcementList);

  const ANNOUNCEMENTS_ROUTE = "http://localhost:3000/api/announcement/recent"

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F7FD',
      padding: 10,
    },
    scrollView: {
      backgroundColor: '#F6F7FD'
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      backgroundColor: "white",
      borderRadius: 10
    },
  });

  useEffect(() => {
    const fetchAnnouncementData = async () => {
      try {
        const response = await fetch(ANNOUNCEMENTS_ROUTE);
        const result = await response.json();
        setAnnouncementData(result);
        setFilteredAnnouncements(result);
      } catch (error) {
        console.error("Error fetching announcements data:", error);
      }
    };

    fetchAnnouncementData();
  }, []);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredAnnouncements(announcementData);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filteredData = announcementData.filter((announcement: AnnouncementData) => {
        return announcement.title.toLowerCase().includes(lowercasedQuery) || announcement.organization.name.toLowerCase().includes(lowercasedQuery);
      });
      setFilteredAnnouncements(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F7FD' }}>
      <View style={{ flex: 1, backgroundColor: '#F6F7FD' }}>
        <Searchbar
          placeholder="Search for announcement"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchContainer}
        />
        <View style={styles.container}>
          <AnnouncementList announcementList={filteredAnnouncements} navigator={props.navigator}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

