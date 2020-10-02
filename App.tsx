import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const MapContainer = require('./src/components/MapContainer.jsx');

export default function App() {
  return (
    <View style={styles.container}>
      <MapContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
