import React, { useEffect, useState } from "react";
import AnnouncementList from "../components/announcement/AnnouncementList";
import { AnnouncementData } from "../types/AnnouncementData";
import { Searchbar } from "react-native-paper";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

type DisplayMode = "none" | "flex" | undefined

export function AnnouncementsPage(props: { navigator: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<AnnouncementData[]>([]);
  const [announcementData, setAnnouncementData] = useState<AnnouncementData[]>([]);
  const [nameMapping, setNameMapping] = useState(new Map())
  const [displayToggle, setDisplayToggle] = useState<DisplayMode>("none");
  const ANNOUNCEMENTS_ROUTE = "http://[Server Host IP]:3000/api/announcement/"
  const ORGANIZATION_ROUTE = "http://[Server Host IP]:3000/api/organization/"

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
    results: {
      margin: 10,
      fontSize: 20,
      fontWeight: '600',
      display: displayToggle,
    }
  });

  useEffect(() => {
    const createMapping = async (announcements: Array<AnnouncementData>) => {
      try {
        const map = new Map()
        for (const announcement of announcements) {
          if (!map.has(announcement.organization)) {
            const response = await fetch(ORGANIZATION_ROUTE + announcement.organization)
            const result = await response.json()
            map.set(announcement._id, result.name)
          }
        }
        setNameMapping(map)
      }
      catch (error) {
        console.error('Error creating mapping', error)
      }
    };
    const fetchAnnouncementData = async () => {
      try {
        const response = await fetch(ANNOUNCEMENTS_ROUTE);
        const result = await response.json();
        setAnnouncementData(result);
        setFilteredAnnouncements(result);
        await createMapping(result);
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
        return announcement.title.toLowerCase().includes(lowercasedQuery) || announcement.organization.toLowerCase().includes(lowercasedQuery);
      });
      setFilteredAnnouncements(filteredData);
    }

    if (query === "") {
      setDisplayToggle("none")
    } else {
        setDisplayToggle("flex")
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
        <Text style={styles.results}>{filteredAnnouncements.length} results for "{searchQuery}"</Text>
        <View style={styles.container}>
          <AnnouncementList announcementList={filteredAnnouncements} navigator={props.navigator} nameToId={nameMapping}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

