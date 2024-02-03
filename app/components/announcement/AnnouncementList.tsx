import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native'; // Assuming you are using React Native
import { AnnouncementData } from '../../types/AnnouncementData';
import AnnouncementCard from './AnnouncementCard'
const AnnouncementList = (props: { announcementList: AnnouncementData[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [organizationFilter, setOrganizationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredAnnouncements = props.announcementList.filter((announcement) => {
    const matchesOrganization = announcement.organization.includes(organizationFilter);
    const matchesType = announcement.type.includes(typeFilter);
    const matchesSearchTerm = announcement.organization.includes(searchTerm) || announcement.type.includes(searchTerm);

    return matchesOrganization && matchesType && matchesSearchTerm;
  });

  return (
    <ScrollView>
      <View>
        <Text>Inbox</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />

      {filteredAnnouncements.map((announcement) => (
        <AnnouncementCard AnnouncementData={announcement} key={announcement.id} />
      ))}
    </ScrollView>
  );
};

export default AnnouncementList;
