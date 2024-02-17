import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'; // Assuming you are using React Native
import { AnnouncementData } from '../../types/AnnouncementData';
import AnnouncementCard from './AnnouncementCard'
import { AntDesign } from '@expo/vector-icons';

const AnnouncementList = (props: { announcementList: AnnouncementData[] }) => {
  const styles = StyleSheet.create({

    InboxTitle: {
      fontSize: 28,
      marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Background color for the search box
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  searchResult: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
   
  }

  })

  

  const [searchTerm, setSearchTerm] = useState('');
  const [organizationFilter, setOrganizationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredAnnouncements = props.announcementList.filter((announcement) => {
    const organization = announcement.organization.toLowerCase();
    const type = announcement.type.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    const organizationFilterLower = organizationFilter.toLowerCase();
    const typeFilterLower = typeFilter.toLowerCase();

    const matchesOrganization = organization.includes(organizationFilterLower);
    const matchesType = type.includes(typeFilterLower);
    const matchesSearchTerm = organization.includes(searchTermLower) || type.includes(searchTermLower);

    return matchesOrganization && matchesType && matchesSearchTerm;
});


  return (
    <ScrollView>
      <View>
        <Text style = {styles.InboxTitle}>Inbox</Text>
        
      </View>

      

      <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Search for announcement"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        style={styles.input}
      />
    </View>
      {searchTerm.length > 0 && (
          <Text style = {styles.searchResult}>{`${filteredAnnouncements.length} results for "${searchTerm}"`}</Text>
        )}

      {filteredAnnouncements.map((announcement) => (
        <AnnouncementCard AnnouncementData={announcement} key={announcement.id} />
      ))}
    </ScrollView>
  );
};

export default AnnouncementList;
