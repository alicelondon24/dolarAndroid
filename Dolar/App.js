import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dolar } from './src/view/Dolar';

export default function App() {
  return (
    <View style={styles.container}>
      <Dolar />
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
