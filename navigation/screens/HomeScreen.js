import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
// import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Press me" onPress={() => alert('Button pressed!')} />
    </View>
  );
}