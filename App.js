import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TicTacToe from './src/screens/TicTacToeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TicTacToe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
