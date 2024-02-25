import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007AFF', // Zelle blue color
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF', // White text color
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;