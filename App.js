import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from "./src/context/ThemeStore";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <ThemeProvider>
      <MainScreen/>
    </ThemeProvider>
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
