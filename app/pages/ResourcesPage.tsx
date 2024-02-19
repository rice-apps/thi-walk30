import React, { useEffect, useState } from "react";
import ResourceList from "../components/resource/ResourceList";
import { ResourceData } from "../types/ResourceData";
import { Searchbar } from "react-native-paper";
import { ScrollView, Text, StyleSheet, SafeAreaView, View } from "react-native";

// get from backend ?
const resourceList: ResourceData[] = [];

type DisplayMode = "none" | "flex" | undefined

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState(resourceList);
  const [displayToggle, setDisplayToggle] = useState<DisplayMode>("none");

  const [resourceData, setResourceData] = useState<ResourceData[]>([]);

  const RESOURCES_ROUTE = "http://localhost:3000/api/resource/recent"

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
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: "white",
      borderRadius: 10
    },
  });

  useEffect(() => {
    const fetchResourceData = async () => {
      try {
        const response = await fetch(RESOURCES_ROUTE);
        const result = await response.json();
        setResourceData(result);
        setFilteredResources(result);
      } catch (error) {
        console.error("Error fetching resource data:", error);
      }
    };

    fetchResourceData();
  }, []);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredResources(resourceData);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filteredData = resourceData.filter((resource: ResourceData) => {
        return resource.title.toLowerCase().includes(lowercasedQuery);
      });
      setFilteredResources(filteredData);
    }
  };

  const handleInputChange = (event: string) => {
    const searchTerm = event;
    setSearchQuery(searchTerm);

    const filteredItems = resourceList.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResources(filteredItems);

    if (searchTerm === "") {
        setDisplayToggle("none")
    } else {
        setDisplayToggle("flex")
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#00426D' }}>
      <View style={{ flex: 1, backgroundColor: '#00426D' }}>
        <Searchbar
          placeholder="Search for resources"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchContainer}
        />
        <View style={styles.container}>
          <ResourceList resourceList={filteredResources} />
        </View>
      </View>
    </SafeAreaView>
  );
}
