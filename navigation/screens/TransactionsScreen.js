import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionsScreen() {
  return (
    <View style={{ flex: 1}}>
        <Header title="Transactions" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Transactions Screen</Text>
    </View>
    </View>
  );
}