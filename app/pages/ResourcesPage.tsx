import React, { useState } from "react";
import ResourceList from "../components/resource/ResourceList";
import { ResourceData } from "../types/ResourceData";
import { Searchbar } from "react-native-paper";
import { ScrollView, Text } from "react-native";

// get from backend ?
const resourceList: ResourceData[] = [];

type DisplayMode = "none" | "flex" | undefined

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState(resourceList);
  const [displayToggle, setDisplayToggle] = useState<DisplayMode>("none");

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
    <ScrollView
      style={{ marginLeft: 20, marginRight: 20, marginTop: "15%" }}
      showsVerticalScrollIndicator={false}
    >
      <Searchbar
        placeholder="Search for resource"
        onChangeText={(event) => {
          handleInputChange(event);
        }}
        value={searchQuery}
        style={{ marginBottom: 20, backgroundColor: "white", borderRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          marginBottom: 20,
          display: displayToggle,
        }}
      >
        {filteredResources.length} results for "{searchQuery}"
      </Text>
      <ResourceList resourceList={filteredResources} />
    </ScrollView>
  );
}
