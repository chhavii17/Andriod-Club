import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppBar from './appbar';
import CardGrid from './cards';
import HomeCard from './home';


export default function App() {
  return (
    <SafeAreaProvider>
    <AppBar/>
    <HomeCard/>
    <CardGrid/>

    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});