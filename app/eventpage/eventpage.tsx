import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Linking } from 'react-native';  // <-- Import TouchableHighlight
import { Card } from 'react-native-paper';

export function EventPage(props: { title: string; body: string; date: string; hostorg: string }) {
  const [buttonText, setButtonText] = useState('I plan to attend');

  const onPressButton = () => {
    setButtonText('Registered!');
  };

  const onLinkPress = () => {
    Linking.openURL('https://www.techonthenet.com/index.php');
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={props.title} titleVariant="titleMedium" titleNumberOfLines={2} />
      <Card.Content>
        <Text>{props.body}</Text>
        <Text>{props.date}</Text>
        <Text>{props.hostorg}</Text>
      </Card.Content>
      <Button onPress={onPressButton} title={buttonText} />
      <TouchableHighlight onPress={onLinkPress}>
        <View>
          <Text>TechOnTheNet</Text>
        </View>
      </TouchableHighlight>
    </Card>
  );
}
